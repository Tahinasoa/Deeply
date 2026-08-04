import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function MCQ() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="space-y-3">
        {/* Area 1: Instruction */}
        <CardDescription className="text-sm font-medium">
          Choose the correct answer
        </CardDescription>

        {/* Area 2: Question */}
        <CardTitle className="text-xl leading-relaxed">
          What is the derivative of f(x) = x²?
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Area 3: Options */}
        <div className="flex flex-col gap-3">
          <button
            className="
              w-full rounded-lg border p-4 text-left
              transition-colors
              hover:bg-accent
            "
          >
            A. 2x
          </button>

          <button
            className="
              w-full rounded-lg border p-4 text-left
              transition-colors
              hover:bg-accent
            "
          >
            B. x²
          </button>

          <button
            className="
              w-full rounded-lg border p-4 text-left
              transition-colors
              hover:bg-accent
            "
          >
            C. x
          </button>
        </div>
      </CardContent>
    </Card>
  );
}