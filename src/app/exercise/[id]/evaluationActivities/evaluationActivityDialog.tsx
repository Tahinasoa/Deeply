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
import { MarkdownContent } from "../../markdownContent";

export function EvaluationActivityDialog({ onClose }: { onClose?: () => void }) {

  function handleClose() {
    if (onClose) {
      onClose();
    }
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
            <MarkdownContent className="border-b-2 border-border">
              {`**Question 1** : Phase de dépassement
Consigne : Indique le sens du vecteur vitesse  v et celui du vecteur accélération  a`}
            </MarkdownContent>
            <MCQ />
          </div>

          <DialogFooter className="flex-none bg-blue">
            <Button className="flex items-center bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-medium">
              suivant <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}