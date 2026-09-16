import Link from "next/link";
import {
  ChevronLeft,
  Globe,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { ComingSoon } from "./components/coming-soon";
import {type  CourseInfo, Chapters } from "./components/chapters";



const mockCourse: CourseInfo = {
  title: "Mathématiques - Classe de Seconde",
  cover: "/subjects/maths.png",
  system: "MG",
  grade: "Seconde",
  subject: "Mathématiques",
  chapters: [
    { id: "1", slug: "4f7g9h2k1m", title: "Algèbre", contentCount: 12 },
    { id: "2", slug: "z8x2y7w9v1", title: "Analyse", contentCount: 15 },
    { id: "3", slug: "q3r8t5p6s2", title: "Géométrie", contentCount: 18 },
    { id: "4", slug: "n5m1k9j3h7", title: "Statistiques", contentCount: 6 }
  ],
};


function CourseDetailPage({ course = mockCourse }: { course?: CourseInfo }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Info bar: back link + Système / Grade / Matière */}
      <div className="flex items-center gap-6 px-8 py-3 border-b border-border bg-card">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
        >
          <ChevronLeft className="size-4" />
          Toutes les matières
        </Link>

        <div className="h-4 w-px bg-border" />

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe className="size-4 text-primary" />
          <span>{course.system}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="size-4 text-primary" />
          <span>{course.grade}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="size-4 text-primary" />
          <span>{course.subject}</span>
        </div>
      </div>

      
      {true ? <ComingSoon backHref="/"/> :
      <Chapters course={mockCourse}/> }
    </div>
  );
}

export default CourseDetailPage;