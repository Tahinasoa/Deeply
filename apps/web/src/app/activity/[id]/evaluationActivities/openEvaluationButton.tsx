'use client'

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

function OpenEvaluationButton({ onClick }: { onClick?: () => void }) {
    const triggerRef = useRef<HTMLDivElement>(null);
    const [fixedPosition, setFixedPosition] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setFixedPosition(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        const trigger = triggerRef.current;

        if (trigger) {
            observer.observe(trigger);
        }

        return () => {
            if (trigger) {
                observer.unobserve(trigger);
            }
        };
    }, []);

    return (
        <div className="flex justify-end items-end">
            {fixedPosition && (
                <div className="invisible">
                    <Button variant="default-square">
                        Auto Évaluation
                    </Button>
                </div>
            )}

            <div ref={triggerRef} className="h-px w-px" />
            <Button
                onClick={onClick}
                variant="default-square"
                className={(fixedPosition ? "fixed bottom-4 right-4" : "")}
            >
                Auto Évaluation
            </Button>
        </div>
    );
}

export default OpenEvaluationButton;