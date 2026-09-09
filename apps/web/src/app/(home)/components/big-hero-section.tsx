import Image from "next/image";
import { Search } from "lucide-react";

function BigHeroSection({ username }: { username?: string }) {
  return (
    <div className="relative bg-background overflow-hidden">
      {/* Background image (landscape) */}
      <div className="absolute inset-0">
        <Image
          src="/hero-landscape.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative px-8 py-16 md:py-20">
        <div className="max-w-xl">
          <p className="text-primary font-semibold mb-2">Bonjour ${username} !</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Apprends aujourd&apos;hui, construis demain.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Accède à une vaste bibliothèque de livres et de ressources
            éducatives, organisées par matière, pour tous les niveaux.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher une matière, un livre, un mot-clé..."
              className="w-full h-12 pl-12 pr-4 rounded-full bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigHeroSection;