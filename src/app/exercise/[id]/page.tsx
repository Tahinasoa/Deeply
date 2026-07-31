import { notFound } from "next/navigation";
import { exo, Exercise } from "./mockExercices";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from "rehype-katex";
import markdownComponents from "@/components/markdownComponents";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Page(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params;
  const exercise = exo.get(params.id);
  if (!exercise) {
    notFound();
  }

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
          <header className="mb-8 border-b border-border pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Exercise
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1.5">
              {exercise.title}
            </h1>
          </header>

          <section className="p-6 sm:p-8 bg-card text-card-foreground border border-border rounded-xl shadow-sm">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
              components={markdownComponents}
            >
              {exercise.content}
            </ReactMarkdown>
          </section>
        </article>
      </div>
    </div>
  );
}