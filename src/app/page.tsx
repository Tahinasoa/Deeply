import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ExerciseItem } from "@/components/exerciseItem"

import { Input } from "@/components/ui/input"
import SearchInput from '@/components/ui/searchInput'
import { ThemeSwitch } from '@/components/themeSwitch'

export default function Home() {
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
              <span className="text-sm font-medium text-muted-foreground">Tahinasoa</span>
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
          <ExerciseItem exerciseId={"1"} title={"Affine Transformations"} description={"MATH | Geometry"} masterLevel={20} />
          <ExerciseItem exerciseId={"2"} title={"Quadratic Equations"} description={"MATH | Algebra"} masterLevel={75} />
          <ExerciseItem exerciseId={"4"} title={"Limits and Continuity"} description={"MATH | Calculus"} masterLevel={30} />
          <ExerciseItem exerciseId={"5"} title={"Conditional Probability"} description={"MATH | Probability"} masterLevel={90} />
          <ExerciseItem exerciseId={"6"} title={"Vectors and Coordinate Planes"} description={"MATH | Geometry"} masterLevel={15} />
          <ExerciseItem exerciseId={"7"} title={"Systems of Linear Equations"} description={"MATH | Algebra"} masterLevel={45} />
          <ExerciseItem exerciseId={"8"} title={"Derivatives and Variations"} description={"MATH | Calculus"} masterLevel={60} />
          <ExerciseItem exerciseId={"9"} title={"Descriptive Statistics"} description={"MATH | Statistics"} masterLevel={85} />
          <ExerciseItem exerciseId={"10"} title={"Trigonometry in Right Triangles"} description={"MATH | Geometry"} masterLevel={50} />
          <ExerciseItem exerciseId={"11"} title={"Complex Numbers & Graphing"} description={"MATH | Algebra"} masterLevel={65} />
        </div>
      </main>
    </div>
  )
}
