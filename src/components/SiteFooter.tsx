import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">Chez Werth</h3>
          <p className="mt-3 text-sm leading-relaxed text-background/70">
            Café, petite restauration de saison et pâtisseries maison au cœur de Delémont.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/chez.werth/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-background/30 p-2 transition hover:bg-accent hover:text-accent-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091717035025"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-background/30 p-2 transition hover:bg-accent hover:text-accent-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <h4 className="mb-3 font-display text-lg">Nous trouver</h4>
          <p className="flex items-start gap-2 text-background/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Pl. de la Gare 14<br />2800 Delémont
          </p>
          <p className="mt-2 flex items-center gap-2 text-background/80">
            <Phone className="h-4 w-4 text-accent" /> +41 32 422 00 00
          </p>
          <p className="mt-2 flex items-center gap-2 text-background/80">
            <Mail className="h-4 w-4 text-accent" /> bonjour@chezwerth.ch
          </p>
        </div>

        <div className="text-sm">
          <h4 className="mb-3 font-display text-lg">Pages</h4>
          <ul className="space-y-2 text-background/80">
            <li><Link to="/" className="hover:text-accent">Accueil</Link></li>
            <li><Link to="/histoire" className="hover:text-accent">Notre histoire</Link></li>
            <li><Link to="/traiteur" className="hover:text-accent">Service traiteur</Link></li>
            <li><Link to="/patisseries" className="hover:text-accent">Pâtisseries</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15 px-5 py-5 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Chez Werth · Place de la Gare 14, Delémont
      </div>
    </footer>
  );
}
