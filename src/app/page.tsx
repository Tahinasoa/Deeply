import { Avatar, AvatarFallback } from '@/components/ui/avatar'


import SearchInput from '@/components/ui/searchInput'
import { ThemeSwitch } from '@/components/themeSwitch'

import Repository from '@/lib/database/mock/db'
import { LearningSessionProgress, LearningSessionSummary } from '@/types/learning-session'
import { LearningSessionItem } from '@/components/learningSession'
import { auth, signOut } from '@/auth'
import { LogOut, LogOutIcon } from 'lucide-react'
import { LogoutButton } from '@/components/LogOutButton'
import { LoginButton } from '@/components/LoginButton'
import { redirect } from 'next/navigation'




export default async function Home() {
  const repo = new Repository() ;
  const userSession = await auth() ;
  const user = userSession?.user ;
  if(!user){
    redirect("/account/login") ;
  }

  const sessions:LearningSessionSummary[] = await repo.getLearningSessionsSummaries() ;
  const progress:LearningSessionProgress[] = await repo.getLearningSessionProgress(user?.publicId) ;
  const sessionComponents = sessions.map(session=>{
    const prog = progress.find((p)=>(p.learningSessionId===session.id))?.masteryLevel || 0;
    return <LearningSessionItem key={session.id} exerciseId={session.id} title={session.title} description={session.description || ""} masteryLevel={prog} />
  }) ;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative pb-24">
      

      <header className="w-full border-b px-6 md:px-12 lg:px-24 py-4 flex flex-col">

<div className='flex items-center justify-between'>
  <div className="text-xl font-bold tracking-tight">Deeply : Understand concepts instead of memorizing them.</div>
  <div className='flex items-stretch gap-3'>
    <ThemeSwitch />
    
    {/* item separator*/}
    <div className="w-px bg-border"></div>
    
   {
    userSession?<>
     <div className="flex flex-col items-center justify-center">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">{user.username? user.username[0].toUpperCase() : "?"}</AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium text-muted-foreground">{user.username}</span>
    </div>
    <LogoutButton/>
    </>
    :
    <LoginButton/>
    }

  </div>
</div>


        <div className='w-full max-w-md'>
          <SearchInput />
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
