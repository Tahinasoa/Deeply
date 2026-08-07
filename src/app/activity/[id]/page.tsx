import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MasteryLevelChart } from "@/components/ui/masteryLevel";
import {  EvaluationActivityContainer } from "./evaluationActivities/evaluationActivityContainer";
import Repository from "@/lib/database/mock/db";
import { useUserId } from "@/lib/authentification/hook";
import { MarkdownContent } from "@/components/markdownContent";

export default async function Page(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params;
  const sessionId  = params.id ;
  const repo = new Repository() ;
  const userId = useUserId() ;
  const [learningSession,_progress, documents] = await Promise.all([
    repo.getLearningSessionsSummary(sessionId),
    repo.getOneLearningSessionProgress(userId, sessionId),
    repo.getLearningSessionDocuments(sessionId)
  ]
  ) ;
  const progress = _progress || "0" ;

  if (!learningSession || !documents) {
    notFound();
  }

  const activities = await repo.getActivities(learningSession.id) ;


  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-transparent bg-transparent px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-muted/40 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <article className="mt-6">
          <header className="flex mb-8 border-b border-border pb-4 items-start gap-4">
            <MasteryLevelChart masteryLevel={65.5} innerRadius={30} outerRadius={40} />
            <div className="flex flex-col items-start gap-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {learningSession.type}
            </span>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1.5">
                {learningSession.title}
              </h1>
              <div className="text-muted-foreground">
                <div className="bg-muted text-muted-foreground px-2.5 py-0.5 rounded-full text-xs font-medium" >{learningSession.topic} | {learningSession.grades.join(' , ')} </div>
                {learningSession.description ? <div>{learningSession.description}</div> : null}
              </div>
            </div>
          </header>

          <section className="p-6 sm:p-8 bg-card text-card-foreground border border-border rounded-xl shadow-sm">
            <MarkdownContent >
              {documents.document}
            </MarkdownContent>
            <EvaluationActivityContainer activities={activities}/>
          </section>
        </article>
      </div>
    </div>
  );
}