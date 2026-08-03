'use client'
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

function OpenEvaluationButton() {
    const triggerRef = useRef<HTMLDivElement>(null);
    const [fixedPosition, setFixedPosition] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setFixedPosition(false);
            }
            else {
                setFixedPosition(true);
            }
        }
            , {
                threshold: 0
            });

        if (triggerRef.current) {
            observer.observe(triggerRef.current);
        }

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <div className="flex justify-end items-end">
            <div ref={triggerRef} className="h-px w-px"></div>
            <button className={cn(fixedPosition && "fixed bottom-4 right-4", "bg-primary font-bold text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-all duration-200 mt-6 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2")}>
                Auto  Évaluation
            </button>
            
            {fixedPosition && ( //this prevents flash/blink du to document reflow when the button is fixed and then becomes relative again
                <button className="bg-primary font-bold text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-all duration-200 mt-6 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    Auto  Évaluation
                </button>
            )}
        </div>
    );
}

export default OpenEvaluationButton;