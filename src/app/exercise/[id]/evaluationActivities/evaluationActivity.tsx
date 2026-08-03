'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function EvaluationActivity({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Activité d'évaluation</DialogTitle>
          <DialogDescription>
            Répondez à cette question pour continuer le cours.
          </DialogDescription>
        </DialogHeader>
        
        {/* Ton composant d'activité ici */}
        <div className="py-4">
          <p>Quel est le résultat de f'(x) ?</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}