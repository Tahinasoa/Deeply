import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import { Input } from "@/components/ui/input"
import SearchInput from '@/components/ui/searchInput'
import { ThemeSwitch } from '@/components/themeSwitch'
import { useMemo } from 'react'
import Repository from '@/lib/database/mock/db'
import { LearningSessionProgress, LearningSessionSummary } from '@/types/learning-session'
import { LearningSessionItem } from '@/components/learningSession'



export default async function Home() {
  const repo = new Repository() ;
  const userId = "user" ;
  const userName = "Default" ;
  const sessions:LearningSessionSummary[] = await repo.getLearningSessionsSummaries() ;
  const progress:LearningSessionProgress[] = await repo.getLearningSessionProgress(userId) ;
  const sessionComponents = sessions.map(session=>{
    const prog = progress.find((p)=>(p.learningSessionId===session.id))?.masteryLevel || 0;
    return <LearningSessionItem key={session.id} exerciseId={session.id} title={session.title} description={session.description || ""} masteryLevel={prog} />
  })

  return (
    // Wrap everything in a main container to manage overall page spacing and z-indices cleanly
    <div className="min-h-screen bg-background text-foreground flex flex-col relative pb-24">
      
      {/* HEADER: Cleaned up paddings and alignment layout bounds */}
      <header className="w-full border-b px-6 md:px-12 lg:px-24 py-4 flex flex-col">
        {/* Top Navbar Row */}
        <div className='flex items-center justify-between'>
          <div className="text-xl font-bold tracking-tight">Deeply : Understand concepts instead of memorizing them.</div>
          <div className='flex items-center gap-3'>
            <div className="flex flex-col items-center">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">T</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-muted-foreground">{userName}</span>
            </div>
            <ThemeSwitch />
          </div>
        </div>
        
        {/* Search Bar Row: Max width constraint applied to avoid edge stretching */}
        <div className='w-full max-w-md'>
          <SearchInput />
        </div>
      </header>

      {/* CARDS SECTION: Unified container alignments perfectly parallel with the header */}
      <main className='px-6 md:px-12 lg:px-24 py-6 flex-1'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {sessionComponents}
        </div>
      </main>
    </div>
  )
}
