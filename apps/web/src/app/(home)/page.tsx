import Repository from '@/lib/database/mock/db'
import { LearningItemProgress, LearningItemSummary } from '@/types/learning-item'
import { LearningItemComponent } from '@/components/learningItem'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import HomeHeader from '@/app/(home)/components/home-header'
import BigHeroSection from '@/app/(home)/components/big-hero-section'
import Subject from '@/app/(home)/components/subject-card'
import { getEducationalSystems, getGradeLevels, getSubjects } from '@/lib/database/contents/curriculum'




export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const userSession = await auth();
  const user = userSession?.user;
  if (!user) {
    redirect("/login");
  }


  const { system: system_param, grade: grade_param } = await searchParams;
  const availableEducationalSystems = await getEducationalSystems();
  const currentEducationSystem = availableEducationalSystems.find(sys => sys.id === system_param) || availableEducationalSystems[0];

  const availableGrades = await getGradeLevels(currentEducationSystem.id);
  const currentGrade = availableGrades.find(gr => gr.id === grade_param) || availableGrades[0];

  const subjects = await getSubjects(currentGrade.id);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative pb-24">
      {/* Header */}
      <HomeHeader user={user} systems={availableEducationalSystems} grades={availableGrades} currentSystemId={currentEducationSystem.id} currentGradeId={currentGrade.id} />
      <BigHeroSection username={user.username} />

      <main className='px-6 md:px-12 lg:px-24 py-6 flex-1'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {subjects.map(sub => (<Subject key={sub.id} info={{ name: sub.name, logo: `/subjects/${sub.icon_path}`, link: `/${sub.url_name}` }}></Subject>))}
        </div>
      </main>
    </div>
  )
}
