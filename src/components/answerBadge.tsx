import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnswerBadgeProps {
  isCorrect: boolean;
  isIncorrect: boolean;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const positionStyles: Record<NonNullable<AnswerBadgeProps["position"]>, string> = {
  "top-right": "-top-2 -right-2",
  "top-left": "-top-2 -left-2",
  "bottom-right": "-bottom-2 -right-2",
  "bottom-left": "-bottom-2 -left-2",
};

export function AnswerBadge({ isCorrect, isIncorrect, position = "top-right" }: AnswerBadgeProps) {
  if (!isCorrect && !isIncorrect) return null;

  return (
    <span
      className={cn(
        "absolute z-10 inline-flex items-center justify-center h-5 w-5 rounded-full shrink-0",
        "ring-2 ring-background", // détache le badge du fond derrière lui
        positionStyles[position],
        isCorrect && "bg-correct text-correct-foreground border border-correct-border",
        isIncorrect && "bg-incorrect text-incorrect-foreground border border-incorrect-border"
      )}
    >
      {isCorrect ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <X className="h-3.5 w-3.5" strokeWidth={3} />}
    </span>
  );
}