import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Clock, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import hero from "@/assets/werth/hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Chez Werth, Place de la Gare 14, Delémont" },
      {
        name: "description",
        content:
          "Chez Werth — Place de la Gare 14, 2800 Delémont. Horaires, contact et plan d'accès.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Contact</p>
          <h1 className="mt-4 font-display text-5xl text-foreground sm:text-6xl">
            Passez nous voir.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            À deux pas du quai, Place de la Gare 14 à Delémont.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div className="space-y-8">
          <Info icon={<MapPin className="h-5 w-5" />} title="Adresse">
            Pl. de la Gare 14<br />2800 Delémont, Suisse
          </Info>
          <Info icon={<Clock className="h-5 w-5" />} title="Horaires">
            Lundi – Vendredi : 06h30 – 18h30<br />
            Samedi : 07h00 – 16h00<br />
            Dimanche : fermé
          </Info>
          <Info icon={<Phone className="h-5 w-5" />} title="Téléphone">
            <a href="tel:+41324220000" className="hover:text-accent">+41 32 422 00 00</a>
          </Info>
          <Info icon={<Mail className="h-5 w-5" />} title="Email">
            <a href="mailto:bonjour@chezwerth.ch" className="hover:text-accent">bonjour@chezwerth.ch</a>
          </Info>
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.instagram.com/chez.werth/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border p-3 text-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091717035025"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-border p-3 text-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-border shadow-md">
          <iframe
            title="Plan Chez Werth"
            src="https://www.google.com/maps?q=Place+de+la+Gare+14,+2800+Delémont,+Suisse&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl text-foreground">{title}</h3>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
