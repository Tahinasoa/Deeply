"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Share2,
  Users,
  Bookmark,
  Globe,
  GraduationCap,
  BookOpen,
  FileText,
  LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface Chapter {
  id: string;
  slug: string;
  title: string;
  contentCount: number;
}

interface CourseInfo {
  title: string;
  cover: string;
  system: string;
  grade: string;
  subject: string;
  chapters: Chapter[];
}

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

      {/* Header: cover + title + actions */}
      <div className="px-8 py-8 border-b border-border">
        <div className="flex gap-6 max-w-5xl mx-auto items-center">
          <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-sm bg-secondary">
            <Image src="/subjects/maths.jpg" alt={course.title} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">
              {course.title}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" />
                }
              >
                <Share2 className="size-4 mr-2" />
                Partager
                <ChevronDown className="size-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Users className="size-4 mr-2" />
                  Partager avec un élève
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="size-4 mr-2" />
                  Partager avec une classe
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LinkIcon className="size-4 mr-2" />
                  Copier le lien
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="rounded-full">
              <Bookmark className="size-4 mr-2" />
              Sauvegarder
            </Button>
          </div>
        </div>
      </div>

      {/* Chapter list */}
      <div className="max-w-5xl mx-auto px-8 py-8">
        <h2 className="text-sm font-semibold text-muted-foreground mb-4">
          {course.chapters.length} chapitres
        </h2>

        <div className="flex flex-col gap-3">
          {course.chapters.map((chapter, index) => (
            <Link
              key={chapter.id}
              href={`/chapter/TZpMGz3fAw`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <div className="flex items-center justify-center size-10 rounded-xl bg-secondary text-primary font-bold shrink-0 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {index + 1}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">
                  {chapter.title}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <FileText className="size-3.5" />
                  {chapter.contentCount > 0
                    ? `${chapter.contentCount} contenu${chapter.contentCount > 1 ? "s" : ""}`
                    : "Aucun contenu pour le moment"}
                </p>
              </div>

              <div className="flex items-center justify-center size-8 rounded-full bg-secondary text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ChevronRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;