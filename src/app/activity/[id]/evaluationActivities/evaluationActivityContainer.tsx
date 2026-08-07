'use client'

import OpenEvaluationButton from "./openEvaluationButton";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MCQ } from "./mcq/mcq";
import { Activity } from "@/types/type";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ActivityFeedback from "./activityFeedback";

export function EvaluationActivityContainer({ activities, onClose }: { activities: Activity[], onClose?: () => void }) {

  const [currentCompleted, setCurrentCompleted] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState<number>(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [feedbackvisible, setFeedbackvisible] = useState<boolean>(false);
  const totalActivity = activities.length;


  function handleClose() {
    if (onClose) {
      onClose();
    }
  }
  function handleOpen() {
    setVisible(true);
  }


  function handleCompleted(passed: boolean) {
    setCurrentCompleted(true);
    if (passed) {
      setCorrectAnswerCount(correctAnswerCount + 1);
    }
  }

  function handleNext(current: number) {
    const newIndex = current + 1;
    if (newIndex >= activities.length) {
      setFeedbackvisible(true)
      return;
    }

    setCurrentActivityIndex(newIndex);
  }
  function handlePrev(current: number) {
    const newIndex = current - 1;
    if (newIndex >= 0) {
      setCurrentActivityIndex(newIndex);
    }
  }

  useEffect(() => { /* this effect handle scrolling*/
    if (visible) {
      document.body.style.overflow = 'hidden';
    }
    else { document.body.style.overflow = ''; }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  const activityComponents = activities.map((activity, index) => {
    switch (activity.type) {
      case "mcq":
        return <div key={index} className={cn(currentActivityIndex !== index && "hidden")}><MCQ data={activity} onComplete={handleCompleted} /></div>
    }
  });

  return (
    <>
      <OpenEvaluationButton onClick={handleOpen} />

      {/* transparent overlay */}
      <div
        className={
          cn({
            "hidden": !visible,
            "fixed inset-0 bg-white/20 backdrop-blur-sm z-40 flex flex-col items-center justify-center": visible
          })
        }>
        {/* card */}
        <div className=" bg-background text-foreground p-6 rounded-2xl shadow-xl h-10/12 max-w-lg w-full m-4">

          {/* activity content*/}
          <div className={
            cn({
              "h-full flex flex-col ": !feedbackvisible,
              "hidden": feedbackvisible
            })
          }>
            {/* header */}
            <div className="flex-none flex flex-row items-center justify-between gap-4 pb-4 border-b border-border">

              {/* navigation : pill with ghost button */}
              <div className="flex items-center gap-1 rounded-full border border-border bg-muted/40 pl-3 pr-1 py-1">
                <span className="text-sm font-medium text-muted-foreground mr-1">Activité</span>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={() => { handlePrev(currentActivityIndex) }}
                  aria-label="Activité précédente"
                >
                  <ArrowLeft />
                </Button>
                <span className="text-sm font-semibold tabular-nums px-0.5">
                  {currentActivityIndex + 1}/{totalActivity}
                </span>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={() => { handleNext(currentActivityIndex) }}
                  aria-label="Activité suivante"
                >
                  <ArrowRight />
                </Button>
              </div>

              {/* score */}
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                Bonne réponse :{" "}
                <span className="font-semibold text-foreground tabular-nums">
                  {correctAnswerCount}/{totalActivity}
                </span>
              </span>
            </div>

            {/* content */}
            <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar "> {/* content */}
              {activityComponents}
            </div>

            {/* footer */}
            <div className="flex-none flex row justify-end mt-1">
              <Button variant="default-square" onClick={() => { handleNext(currentActivityIndex) }} >
                {currentCompleted ? "suivant" : "Je passe"} <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* feedback content */}
          {feedbackvisible ?
            <ActivityFeedback
              totalActivity={totalActivity}
              totalPassed={correctAnswerCount}
              onBacktoActivity={function (): void {
                setFeedbackvisible(false);
              }}
              onBacktoDocument={function (): void {
                setVisible(false);
              }} /> : null}
        </div>

      </div>
    </>
  );
}