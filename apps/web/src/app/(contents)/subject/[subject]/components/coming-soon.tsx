import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ComingSoonProps {
  title?: string
  backHref?: string
  onBack?: () => void
}

export function ComingSoon({
  title = "Cette page arrive bientôt",
  backHref,
  onBack,
}: ComingSoonProps) {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <img
        src="/under_construction.jpg"
        alt="Site en construction"
        className="w-full max-w-md"
      />

      <h1 className="text-xl font-semibold text-foreground">
        {title}
      </h1>

      <Button
        variant="ghost"
        className="gap-2 text-muted-foreground"
        onClick={!backHref ? onBack : undefined}
        nativeButton={!backHref}
        render={backHref ? <Link href={backHref} /> : undefined}
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à l'accueil
      </Button>
    </div>
  )
}