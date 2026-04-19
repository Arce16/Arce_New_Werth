import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import cover from "@/assets/werth/traiteur-cover.jpg";
import t1 from "@/assets/werth/traiteur-1.jpg";
import t2 from "@/assets/werth/traiteur-2.jpg";
import p1 from "@/assets/werth/presentation-1.jpg";
import p2 from "@/assets/werth/presentation-2.jpg";
import p3 from "@/assets/werth/presentation-3.jpg";
import p4 from "@/assets/werth/presentation-4.jpg";
import repas from "@/assets/werth/repas-emporter.jpg";

export const Route = createFileRoute("/traiteur")({
  head: () => ({
    meta: [
      { title: "Service traiteur — Chez Werth, Delémont" },
      {
        name: "description",
        content:
          "Service traiteur Chez Werth : apéritifs, plateaux repas et livraison en entreprise à Delémont et environs. Carte de saison, produits locaux.",
      },
      { property: "og:image", content: cover },
      { name: "twitter:image", content: cover },
    ],
  }),
  component: TraiteurPage,
});

const offers = [
  { title: "Plats à l'emporter", text: "Une carte de saison qui change chaque semaine, prête à emporter." },
  { title: "Livraison en entreprise", text: "Vos repas livrés directement au bureau (dès 4 plats)." },
  { title: "Apéritifs et plateaux", text: "Bouchées salées et sucrées pour vos événements professionnels et privés." },
  { title: "Pauses café", text: "Cafés, viennoiseries et pâtisseries maison pour vos reuniones." },
];

export default function TraiteurPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/80" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center text-background">
          <p className="text-xs uppercase tracking-[0.4em] text-background/80">Service traiteur</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            La cuisine Werth, <em className="italic text-accent">livrée à vous</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/85">
            Carte de saison, produits locaux, dressage soigné — pour vos déjeuners
            d'entreprise, séminaires, anniversaires ou apéritifs entre amis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <div key={o.title} className="rounded-sm border border-border bg-card p-7">
              <h3 className="font-display text-xl text-foreground">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <img src={repas} alt="Plats à l'emporter" className="aspect-square w-full rounded-sm object-cover shadow-2xl" />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Comment ça marche</p>
            <h2 className="mt-3 font-display text-4xl text-foreground">Simple, gourmand, ponctuel</h2>
            <ol className="mt-8 space-y-6">
              {[
                ["Choisissez", "Consultez la carte de la semana y seleccione sus platos."],
                ["Commandez", "Passez commande par téléphone ou par email avant midi la veille."],
                ["Recevez", "Nous livrons directement chez vous ou au bureau (dès 4 plats)."],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <span className="font-display text-3xl leading-none text-accent">0{i + 1}</span>
                  <div>
                    <h4 className="font-display text-lg text-foreground">{title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE LA CARTA: OPTIMIZADA PARA MÁXIMA VISIBILIDAD */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-accent">La carte traiteur</p>
        <h2 className="mt-3 text-center font-display text-4xl text-foreground">Notre dossier de présentation</h2>
        
        {/* He aumentado el max-w del contenedor y reducido a 2 columnas incluso en pantallas grandes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {[t1, t2, p1, p2, p3, p4].map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-sm shadow-2xl">
              <img
                src={src}
                alt={`Carte traiteur ${i + 1}`}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-foreground px-10 py-4 text-sm font-medium text-background transition-all hover:bg-accent hover:text-accent-foreground shadow-lg"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}