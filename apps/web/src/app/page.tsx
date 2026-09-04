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




export default async function Home() {
  const repo = new Repository();
  const userSession = await auth();
  const user = userSession?.user;
  if (!user) {
    redirect("/account/login");
  }

  const sessions: LearningItemSummary[] = await repo.getLearningItemsSummaries();
  const progress: LearningItemProgress[] = await repo.getLearningItemProgress(user?.publicId);
  const sessionComponents = sessions.map(session => {
    const prog = progress.find((p) => (p.learningItemId === session.id))?.masteryLevel || 0;
    return <LearningItemComponent key={session.id} exerciseId={session.id} title={session.title} description={session.description || ""} masteryLevel={prog} />
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative pb-24">

<header className="w-full border-b border-border/60 bg-background">
  <div className="px-6 md:px-12 lg:px-24 py-5 flex flex-col gap-5">

    <div className="flex items-center justify-between gap-6">

      {/* Logo + wordmark */}
      <div className="flex items-center gap-4 shrink-0">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="rounded-xl"
          />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.75 w-8 rounded-full bg-[#F4A261]" />
        </div>
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Deeply
          </span>
          <span className="text-xs text-muted-foreground">
            Understand concepts instead of memorizing them
          </span>
        </div>
      </div>

      {/* Search — centered, breathing room */}
      <div className="hidden md:flex flex-1 justify-center max-w-md mx-auto">
        <div className="w-full">
          <SearchInput />
        </div>
      </div>

      {/* Actions cluster */}
      <div className="flex items-center gap-3 shrink-0">
        <ThemeSwitch />

        <div className="h-6 w-px bg-border" />

        {userSession ? (
          <>
            <div className="flex items-center gap-2.5 pl-1">
              <Avatar className="h-8 w-8 ring-2 ring-[#8FD3E8]/40">
                <AvatarFallback className="text-xs bg-[#1B2A4A] text-white">
                  {user.username ? user.username[0].toUpperCase() : "?"}
                </AvatarFallback>
              </Avatar>
              <span className="hidden lg:block text-sm font-medium text-muted-foreground max-w-25 truncate">
                {user.username}
              </span>
            </div>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>

    </div>

    {/* Search — mobile only, full width below */}
    <div className="md:hidden w-full">
      <SearchInput />
    </div>

  </div>
</header>


      <main className='px-6 md:px-12 lg:px-24 py-6 flex-1'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {sessionComponents}
        </div>
      </main>
    </div>
  )
}
