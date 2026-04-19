import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Truck, Utensils } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/werth/hero.jpg";
import repas from "@/assets/werth/repas-emporter.jpg";
import patisserie from "@/assets/werth/patisserie-1.jpg";
import traiteur from "@/assets/werth/traiteur-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chez Werth — Café & restauration de saison à Delémont" },
      {
        name: "description",
        content:
          "Café Chez Werth, Place de la Gare à Delémont. Coffee to go, pâtisseries maison, plats de saison à l'emporter et livraison en entreprise.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

const dishes = [
  {
    name: "Tagliatelle bolognaise (CH)",
    detail: "Aubergines confites et parmesan",
    price: "20.—",
  },
  {
    name: "Asperges, vinaigrette aux herbes fraîches",
    detail: "Houmous, chapelure croustillante",
    price: "20.—",
  },
  {
    name: "Tartare de saumon (NO), aneth & citron",
    detail: "Toast, noix de beurre, petite salade verte",
    price: "24.—",
  },
  {
    name: "Roastbeef (CH), sauce tartare",
    detail: "Pesto, noix, frites, petite salade verte",
    price: "28.—",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-background" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 py-16 text-background">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-background/80">
            Place de la Gare 14 · Delémont
          </p>
          <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Une table de saison,<br />
            <em className="font-normal italic text-accent">au cœur de la gare.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/85">
            Café intense, pâtisseries faites maison et petite carte qui change chaque
            semaine — à savourer sur place, à emporter ou livrée à votre bureau.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/traiteur"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Service traiteur <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-background/40 px-6 py-3 text-sm font-medium text-background transition hover:bg-background hover:text-foreground"
            >
              Nous trouver
            </Link>
          </div>
        </div>
      </section>

      {/* Propositions du chef */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">La carte de la semaine</p>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
            Propositions du chef
          </h2>
          <p className="mt-3 text-sm italic text-muted-foreground">
            Mardi 14 à vendredi 17 avril
          </p>

          <div className="mt-12 space-y-10 text-left">
            {dishes.map((d, i) => (
              <div key={d.name}>
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-xl text-foreground sm:text-2xl">
                    {d.name}
                  </h3>
                  <span className="font-display text-xl text-accent">{d.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{d.detail}</p>
                {i < dishes.length - 1 && (
                  <div className="divider-dots mt-8 text-border" />
                )}
              </div>
            ))}
          </div>

          <p className="mt-14 font-display text-2xl italic text-accent">Bon appétit !</p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <Pillar
            icon={<Coffee className="h-5 w-5" />}
            title="Coffee to go"
            text="Une pause parfaite pour votre trajet en train ou sur le chemin du travail."
          />
          <Pillar
            icon={<Utensils className="h-5 w-5" />}
            title="Petits plats sains"
            text="Une cuisine maison avec un maximum de produits locaux, qui varie au gré des saisons."
          />
          <Pillar
            icon={<Truck className="h-5 w-5" />}
            title="Livraison en entreprise"
            text="Repas livrés directement sur votre lieu de travail (dès 4 plats)."
          />
        </div>
      </section>

      {/* Repas à l'emporter */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">À emporter & en livraison</p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              Repas à l'emporter, livrés à votre bureau
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Chez Werth, nous proposons chaque semaine une petite carte de saison avec
              des suggestions savoureuses et équilibrées, disponibles à l'emporter et
              désormais livrées directement dans vos entreprises (minimum 4 plats).
            </p>
            <Link
              to="/traiteur"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Découvrir le service traiteur <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={repas}
              alt="Plats à l'emporter Chez Werth"
              className="aspect-square w-full rounded-sm object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Coffee + Pâtisseries teaser */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-2">
        <article className="group relative overflow-hidden rounded-sm">
          <img src={hero} alt="Coffee to go" className="h-96 w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-background">
            <p className="text-xs uppercase tracking-[0.3em] text-background/70">Coffee to go</p>
            <h3 className="mt-2 font-display text-3xl">Un café intense, à toute heure</h3>
          </div>
        </article>
        <article className="group relative overflow-hidden rounded-sm">
          <img src={patisserie} alt="Pâtisseries maison" className="h-96 w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-background">
            <p className="text-xs uppercase tracking-[0.3em] text-background/70">Pâtisseries maison</p>
            <h3 className="mt-2 font-display text-3xl">Le sucré comme on l'aime</h3>
            <Link to="/patisseries" className="mt-3 inline-flex items-center gap-2 text-sm text-accent">
              Voir nos créations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </section>

      {/* Traiteur strip */}
      <section className="relative overflow-hidden">
        <img src={traiteur} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-background">
          <p className="text-xs uppercase tracking-[0.4em] text-background/80">Service traiteur</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Vos événements, version Werth
          </h2>
          <p className="mt-5 text-base leading-relaxed text-background/85">
            Apéritifs dînatoires, plateaux repas, brunchs d'entreprise — un savoir-faire
            artisanal et des produits locaux pour vos rendez-vous.
          </p>
          <Link
            to="/traiteur"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
          >
            Voir la carte traiteur <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function Pillar({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div>
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-2xl text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
