import Repository from '@/lib/database/mock/db'
import { LearningItemProgress, LearningItemSummary } from '@/types/learning-item'
import { LearningItemComponent } from '@/components/learningItem'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import HomeHeader from '@/app/(home)/components/home-header'
import BigHeroSection from '@/app/(home)/components/big-hero-section'
import Subject from '@/components/subject-card'




export default async function Home() {
  const repo = new Repository();
  const userSession = await auth();
  const user = userSession?.user;
  if (!user) {
    redirect("/login");
  }

  const sessions: LearningItemSummary[] = await repo.getLearningItemsSummaries();
  const progress: LearningItemProgress[] = await repo.getLearningItemProgress(user?.id);
  const sessionComponents = sessions.map(session => {
    const prog = progress.find((p) => (p.learningItemId === session.id))?.masteryLevel || 0;
    return <LearningItemComponent key={session.id} exerciseId={session.id} title={session.title} description={session.description || ""} masteryLevel={prog} />
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative pb-24">
      {/* Header */}
      <HomeHeader />
      <BigHeroSection />

      <main className='px-6 md:px-12 lg:px-24 py-6 flex-1'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Subject info={{ name: "Mathématiques", logo: "/subjects/maths.jpg", link: "maths" }} />
          <Subject info={{ name: "Français", logo: "/subjects/french.jpg", link: "french" }} />
          <Subject info={{ name: "Anglais", logo: "/subjects/english.jpg", link: "english" }} />
          <Subject info={{ name: "Physique-Chimie", logo: "/subjects/physics.jpg", link: "physics" }} />
          <Subject info={{ name: "Sciences de la Vie et de la Terre", logo: "/subjects/svt.jpg", link: "svt" }} />
          <Subject info={{ name: "Histoire", logo: "/subjects/history.jpg", link: "history" }} />
          <Subject info={{ name: "Géographie", logo: "/subjects/geography.jpg", link: "geography" }} />
          <Subject info={{ name: "Économie", logo: "/subjects/economics.jpg", link: "economics" }} />
          <Subject info={{ name: "Philosophie", logo: "/subjects/philo.jpg", link: "philo" }} />
        </div>
      </main>
    </div>
  )
}
