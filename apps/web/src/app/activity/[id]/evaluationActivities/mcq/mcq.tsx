
import { MCQActivity } from "@/types/learning-item";
import { MarkdownContent } from "@/components/markdownContent";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { AnswerBadge } from "@/components/answerBadge";



export function MCQ({ data, onComplete }: { data: MCQActivity, onComplete: (passed: boolean) => void }) {
    const ref = useRef(null);
    const [selection, setSelection] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState<boolean>(false);

    function handleSelection(index: number) {
        if (selection !== null) return;
        setSelection(index);

        setShowExplanation(true);
        onComplete(data.options[index].isCorrect);

    }

    const options = data.options.map((opt, i) => {
        let classname = "";
        const isCorrect = showExplanation && opt.isCorrect;
        const isIncorrect = showExplanation && i === selection && !opt.isCorrect

        if (isCorrect) {
            classname = "bg-correct text-correct";
        }
        else if (isIncorrect) {
            classname = "bg-incorrect text-incorrect"
        }

        return <div
            onClick={() => { handleSelection(i) }}
            key={i}
            className={cn(classname, "relative w-full rounded-lg border border-border/60 px-4 py-3 text-sm cursor-pointer transition-colors hover:border-primary [&_p]:m-0 shadow-sm")}
        >
            <AnswerBadge isCorrect={isCorrect} isIncorrect={isIncorrect} />
            <MarkdownContent>{opt.text}</MarkdownContent>
        </div>
    });
    const explanationStyle = `grid transition-all duration-500 ease-in-out ${showExplanation
        ? "grid-rows-[1fr] opacity-100 mt-4"
        : "grid-rows-[0fr] opacity-0 mt-0"
        }`;

    return (
        <div ref={ref} className="w-full max-w-2xl mx-auto">
            <MarkdownContent className="bg-muted text-muted-foreground p-0.5 m-0.5 border-l-2 border-chart-5">{data.anchorQuestion}</MarkdownContent>
            <div className="border-border rounded-lg border-2 p-2 pt-0.5 mt-2 ">
                <div className="space-y-4">
                    <div className="text-base font-medium leading-relaxed text-foreground">
                        <MarkdownContent>{data.instruction}</MarkdownContent>
                    </div>
                </div>
                <div className="space-y-2">{options}</div>

                <div className={explanationStyle}>
                    <div className="overflow-hidden">
                        <div className="rounded-xl border border-border/50 bg-muted/40 p-4 space-y-1">
                            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                Explication
                            </div>
                            <MarkdownContent className="text-sm text-foreground">{data.explanation}</MarkdownContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}