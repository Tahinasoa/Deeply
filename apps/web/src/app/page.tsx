import { Avatar, AvatarFallback } from '@/components/ui/avatar'


import SearchInput from '@/components/ui/searchInput'
import { ThemeSwitch } from '@/components/themeSwitch'

import Repository from '@/lib/database/mock/db'
import { LearningItemProgress, LearningItemSummary } from '@/types/learning-item'
import { LearningItemComponent } from '@/components/learningItem'
import { auth } from '@/auth'
import { LogoutButton } from '@/components/LogOutButton'
import { LoginButton } from '@/components/LoginButton'
import { redirect } from 'next/navigation'
import Image from "next/image";
import HomeHeader from '@/components/home-header'
import BigHeroSection from '@/components/big-hero-section'
import Subject from '@/components/subject-card'




export default async function Home() {
  const repo = new Repository();
  const userSession = await auth();
  const user = userSession?.user;
  if (!user) {
    redirect("/account/login");
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
          <Subject info={{ name: "Mathématiques", logo: "/subjects/maths.jpg" }} />
          <Subject info={{ name: "Français", logo: "/subjects/french.jpg" }} />
          <Subject info={{ name: "Anglais", logo: "/subjects/english.jpg" }} />
          <Subject info={{ name: "Physique-Chimie", logo: "/subjects/physics.jpg" }} />
          <Subject info={{ name: "Sciences de la Vie et de la Terre", logo: "/subjects/svt.jpg" }} />
          <Subject info={{ name: "Histoire", logo: "/subjects/history.jpg" }} />
          <Subject info={{ name: "Géographie", logo: "/subjects/geography.jpg" }} />
          <Subject info={{ name: "Économie", logo: "/subjects/economics.jpg" }} />
          <Subject info={{ name: "Philosophie", logo: "/subjects/philo.jpg" }} />
        </div>
      </main>
    </div>
  )
}
