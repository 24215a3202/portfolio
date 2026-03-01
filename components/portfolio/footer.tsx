import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-surface-dark text-background py-12 border-t-4 border-accent-amber">
      {/* Decorative track lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-amber" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-amber" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Station footer */}
        <div className="text-center mb-8 pb-8 border-b-2 border-dashed border-accent-amber">
          <div className="text-4xl mb-4">🚂</div>
          <p className="font-signage text-xs uppercase tracking-widest text-background mb-2">
            ▬▬▬ TERMINUS — END OF THE LINE ▬▬▬
          </p>
          <p className="font-body text-sm text-background/80">
            The journey is complete. Now begin yours.
          </p>
        </div>

        {/* Credit line */}
        <p className="flex items-center justify-center gap-2 font-mono-railway text-xs uppercase tracking-widest text-background">
          Designed & Built by Karthik Matham
          <Heart className="h-3 w-3 fill-accent-red text-accent-red" />
          2026
        </p>

        {/* Track line decoration */}
        <div className="mt-6 pt-6 border-t-2 border-dashed border-accent-amber">
          <p className="text-center font-mono-railway text-xs text-background/60 uppercase tracking-widest">
            All Aboard — Thank You for Your Visit
          </p>
        </div>
      </div>
    </footer>
  );
}
