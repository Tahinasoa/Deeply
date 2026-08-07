'use client'
import {
  Dialog,
  DialogContent,

  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger

} from "@/components/ui/dialog";
import OpenEvaluationButton from "./openEvaluationButton";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MCQ } from "./mcq/mcq";
import { MarkdownContent } from "@/components/markdownContent";
import { Activity } from "@/types/type";
import { useState } from "react";

export function EvaluationActivityContainer({ activities, onClose }: {activities:Activity[], onClose?: () => void }) {

  const [currentCompleted, setCurrentCompleted] = useState<boolean>(false) ;
  const [currentActivityIndex,setCurrentActivityIndex] = useState<number>(0) ;
  const currentActivity = activities[currentActivityIndex] ;


  function handleClose() {
    if (onClose) {
      onClose();
    }
  }
  function handleCompleted(passed:boolean){
    setCurrentCompleted(true) ;
  }

  function handleNext(current:number){
    const newIndex = current+1 ;
    if(newIndex>=activities.length){
      alert("Your done, here is your stat") ;
      return ;
    }

    setCurrentActivityIndex(newIndex) ;
  }

  return (
    <>
      <Dialog onOpenChange={handleClose}>
        <DialogTrigger render={<OpenEvaluationButton />} />

        <DialogContent className="flex flex-col gap-3 sm:max-w-md min-h-[60vh] max-h-[90vh] overflow-hidden">
          <DialogHeader className="flex-none">
            <DialogTitle >Auto-évaluation</DialogTitle>
          </DialogHeader>

          <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar ">
            <MCQ key={currentActivity.id} data={currentActivity} onComplete={handleCompleted}/>
          </div>

          <DialogFooter className="flex-none bg-blue">
            <Button onClick={()=>{handleNext(currentActivityIndex)}} className="flex items-center bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-medium">
              {currentCompleted ? "suivant" : "Je passe"} <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}