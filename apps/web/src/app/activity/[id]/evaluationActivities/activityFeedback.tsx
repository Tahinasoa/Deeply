import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export interface ActivityfeedbackProps {
  totalActivity: number;
  totalPassed: number;
  onBacktoActivity : ()=>void;
  onBacktoDocument : ()=>void;
}

function ActivityFeedback({ totalActivity, totalPassed, onBacktoActivity, onBacktoDocument }: ActivityfeedbackProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-4">

      {/* icon */}
      <CheckCircle2 className="h-12 w-12 text-primary" strokeWidth={1.5} />

      {/* headline */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">Évaluation terminée</h2>
        <p className="text-sm text-muted-foreground">
          Voici votre résultat pour cette activité
        </p>
      </div>

      {/* score */}
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-semibold text-foreground">{totalPassed}</span>
        <span className="text-lg text-muted-foreground">/ {totalActivity}</span>
      </div>
      <p className="text-sm text-muted-foreground -mt-4">bonnes réponses</p>

      {/* actions */}
      <div className="flex flex-row gap-2 mt-2">
        <Button variant="default-square" onClick={onBacktoActivity}>
          <ArrowLeft /> Activité
        </Button>
        <Button variant="default-square" onClick={onBacktoDocument}>
          Document <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default ActivityFeedback;