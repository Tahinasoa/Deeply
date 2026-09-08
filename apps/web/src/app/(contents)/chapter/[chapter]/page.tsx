"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Globe,
  GraduationCap,
  BookOpen,
  Shapes,
  Share2,
  Bookmark,
  ChevronDown,
  BookOpenText,
  PenLine,
  ClipboardList,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type ContentType = "cours" | "exercice" | "travaux-diriges";
type Progression = "non-evalue" | "incomplet" | "correct" | "valide";

interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  progression: Progression;
  score?: number; // 0-100, undefined for non-scorable items (e.g. 3D models)
}

interface ChapterInfo {
  chapterLabel: string; // "Chapitre 3"
  title: string; // "Géométrie - Classe de Seconde"
  icon: string;
  system: string;
  grade: string;
  subject: string;
  chapterName: string;
  items: ContentItem[];
}

const mockChapter: ChapterInfo = {
  chapterLabel: "Chapitre 3",
  title: "Géométrie - Classe de Seconde",
  icon: "/chapters/geometrie.png",
  system: "MG",
  grade: "Seconde",
  subject: "Mathématiques",
  chapterName: "Géométrie",
  items: [
    { id: "1", title: "Les Vecteurs : Définition", type: "cours", progression: "incomplet", score: 75 },
    { id: "2", title: "Trigonométrie de Base", type: "exercice", progression: "incomplet", score: 40 },
    { id: "3", title: "Le Théorème de Pythagore", type: "cours", progression: "valide", score: 100 },
    { id: "4", title: "Droites et Points Remarquables", type: "cours", progression: "non-evalue", score: 20 },
    { id: "5", title: "Translations", type: "exercice", progression: "valide", score: 90 },
    { id: "6", title: "Cercles et Angles", type: "cours", progression: "incomplet", score: 60 },
    { id: "7", title: "Calcul d'Aires", type: "exercice", progression: "non-evalue", score: 5 },
    { id: "8", title: "Solides en 3D", type: "exercice", progression: "incomplet", score: 50 },
    { id: "9", title: "Géométrie 3D", type: "travaux-diriges", progression: "non-evalue" },
    { id: "10", title: "Géométrie Vectorielle", type: "cours", progression: "incomplet", score: 10 },
  ],
};

const TYPE_CONFIG: Record<ContentType, { label: string; icon: typeof BookOpenText; colorClass: string }> = {
  cours: { label: "cours", icon: BookOpenText, colorClass: "bg-selected text-selected-foreground" },
  exercice: { label: "exercice", icon: PenLine, colorClass: "bg-correct text-correct-foreground" },
  "travaux-diriges": { label: "travaux dirigés", icon: ClipboardList, colorClass: "bg-warning text-warning-foreground" },
};

const PROGRESSION_CONFIG: Record<Progression, { label: string; ringVar: string; textClass: string }> = {
  "non-evalue": { label: "Non évalué", ringVar: "var(--muted-foreground)", textClass: "text-muted-foreground" },
  incomplet: { label: "Incomplet", ringVar: "var(--warning-border)", textClass: "text-warning-border" },
  correct: { label: "Correct", ringVar: "var(--selected-border)", textClass: "text-selected-border" },
  valide: { label: "Validé", ringVar: "var(--correct-border)", textClass: "text-correct-border" },
};

function ScoreRing({ score, progression }: { score: number; progression: Progression }) {
  const size = 72;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = PROGRESSION_CONFIG[progression].ringVar;

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--border)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(90 ${size / 2} ${size / 2})`}
        className="fill-foreground text-lg font-bold"
      >
        {score}
      </text>
    </svg>
  );
}

function ContentCard({ item }: { item: ContentItem }) {
  const typeConfig = TYPE_CONFIG[item.type];
  const TypeIcon = typeConfig.icon;
  const progConfig = PROGRESSION_CONFIG[item.progression];

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-sm transition-shadow">
      <div>
        <p className="font-semibold text-foreground text-sm leading-snug mb-1.5">
          {item.title}
        </p>
        <span
          className={cn(
            "inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-md",
            typeConfig.colorClass
          )}
        >
          <TypeIcon className="size-3" />
          {typeConfig.label}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1 py-1">
        {item.score !== undefined ? (
          <ScoreRing score={item.score} progression={item.progression} />
        ) : (
          <div className="flex items-center justify-center size-[72px] rounded-xl bg-secondary text-primary">
            <Box className="size-8" />
          </div>
        )}
        <span className={cn("text-xs font-medium mt-1", progConfig.textClass)}>
          {progConfig.label}
        </span>
      </div>
    </div>
  );
}

function ChapterPage({ chapter = mockChapter }: { chapter?: ChapterInfo }) {
  const [typeFilter, setTypeFilter] = useState<ContentType | null>("exercice");
  const [progressionFilter, setProgressionFilter] = useState<Progression | null>("incomplet");

  const filteredItems = chapter.items.filter((item) => {
    if (typeFilter && item.type !== typeFilter) return false;
    if (progressionFilter && item.progression !== progressionFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb bar */}
      <div className="flex items-center gap-6 px-8 py-3 border-b border-border bg-card flex-wrap">
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
          <span>{chapter.system}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="size-4 text-primary" />
          <span>{chapter.grade}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="size-4 text-primary" />
          <span>{chapter.subject}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shapes className="size-4 text-primary" />
          <span>{chapter.chapterName}</span>
        </div>
      </div>

      {/* Header: icon + title + actions */}
      <div className="px-8 py-6 border-b border-border">
        <div className="flex gap-5 max-w-6xl mx-auto items-center">
          <div className="flex items-center justify-center size-16 shrink-0 rounded-2xl bg-secondary">
            <Shapes className="size-8 text-primary" />
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold text-muted-foreground mb-0.5">
              {chapter.chapterLabel}
            </p>
            <h1 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight">
              {chapter.title}
            </h1>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" />}
              >
                <Share2 className="size-4 mr-2" />
                Partager
                <ChevronDown className="size-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Partager avec un élève</DropdownMenuItem>
                <DropdownMenuItem>Partager avec une classe</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Copier le lien</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="rounded-full">
              <Bookmark className="size-4 mr-2" />
              Sauvegarder
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-8 pt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-foreground">Type :</span>
          {(["cours", "exercice", "travaux-diriges"] as ContentType[]).map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(typeFilter === t ? null : t)}
              className={cn(
                "text-sm px-3 py-1 rounded-full border transition-colors",
                typeFilter === t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40"
              )}
            >
              {TYPE_CONFIG[t].label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-foreground">Progression :</span>
          {(["non-evalue", "incomplet", "correct", "valide"] as Progression[]).map((p) => (
            <button
              key={p}
              onClick={() => setProgressionFilter(progressionFilter === p ? null : p)}
              className={cn(
                "text-sm px-3 py-1 rounded-full border transition-colors",
                progressionFilter === p
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40"
              )}
            >
              {PROGRESSION_CONFIG[p].label}
            </button>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div className="max-w-6xl mx-auto px-8 py-6">
        <p className="text-sm text-muted-foreground mb-4">
          {filteredItems.length} contenu{filteredItems.length > 1 ? "s" : ""}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChapterPage;