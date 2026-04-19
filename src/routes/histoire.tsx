import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import founders from "@/assets/werth/founders.jpg";
import hero from "@/assets/werth/hero.jpg";

export const Route = createFileRoute("/histoire")({
  head: () => ({
    meta: [
      { title: "Notre histoire — Chez Werth, Delémont" },
      {
        name: "description",
        content:
          "L'histoire de Chez Werth : trois générations passionnées par la table, le café et le savoir-faire artisanal, à Delémont.",
      },
      { property: "og:image", content: founders },
      { name: "twitter:image", content: founders },
    ],
  }),
  component: HistoirePage,
});

function HistoirePage() {
  return (
    <SiteLayout>
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Notre histoire</p>
          <h1 className="mt-4 font-display text-5xl text-foreground sm:text-6xl">
            Une maison de famille,<br />
            <em className="font-normal italic">depuis toujours.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <img
          src={founders}
          alt="Josette et Paul Werth"
          className="aspect-[16/10] w-full rounded-sm object-cover shadow-xl"
        />
        <p className="mt-3 text-center text-xs italic text-muted-foreground">
          Josette et Paul Werth, les fondateurs.
        </p>
      </section>

      <section className="mx-auto max-w-3xl space-y-6 px-5 pb-20 text-base leading-relaxed text-foreground/90">
        <p>
          Tout commence il y a plusieurs décennies, lorsque Josette et Paul Werth ouvrent
          un café-restaurant à Delémont. Très vite, la maison devient un repère : on y
          vient pour un café, pour une part de gâteau, pour un plat du jour qui change
          au rythme des saisons.
        </p>
        <p>
          Aujourd'hui, l'esprit reste le même. Une cuisine sincère, des produits locaux,
          un café choisi avec soin et une attention particulière portée à chaque client
          — qu'il soit pressé entre deux trains ou installé pour un long déjeuner.
        </p>
        <p>
          Place de la Gare 14, à deux pas du quai, Chez Werth perpétue cet héritage :
          être le premier sourire du matin et le dernier café de l'après-midi.
        </p>
      </section>

      <section className="relative overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center text-background">
          <blockquote className="font-display text-3xl italic leading-snug sm:text-4xl">
            « Recevoir, c'est offrir un moment — pas seulement un plat. »
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-background/70">
            La maison Werth
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
