import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bookmark, ChevronDown, ChevronRight, FileText, LinkIcon, Share2, Users } from "lucide-react"
import Link from 'next/link'
import Image from "next/image"

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  contentCount: number;
}

export interface CourseInfo {
  title: string;
  cover: string;
  system: string;
  grade: string;
  subject: string;
  chapters: Chapter[];
}

export function Chapters({ course }: { course: CourseInfo }) {
  {/* Header: cover + title + actions */ }
  return (
    <>
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
    </>
  )
}