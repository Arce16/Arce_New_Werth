import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import p1 from "@/assets/werth/patisserie-1.jpg";
import p2 from "@/assets/werth/patisserie-2.jpg";
import p3 from "@/assets/werth/patisserie-3.jpg";
import p4 from "@/assets/werth/patisserie-4.jpg";
import p5 from "@/assets/werth/patisserie-5.jpg";
import p6 from "@/assets/werth/patisserie-6.jpg";

export const Route = createFileRoute("/patisseries")({
  head: () => ({
    meta: [
      { title: "Pâtisseries maison — Chez Werth, Delémont" },
      {
        name: "description",
        content:
          "Tartes, gâteaux et entremets faits maison Chez Werth, à Delémont. Le sucré au quotidien, à emporter ou sur place.",
      },
      { property: "og:image", content: p1 },
      { name: "twitter:image", content: p1 },
    ],
  }),
  component: PatisseriesPage,
});

const items = [p1, p2, p3, p4, p5, p6];

function PatisseriesPage() {
  return (
    <SiteLayout>
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Pâtisseries maison</p>
          <h1 className="mt-4 font-display text-5xl text-foreground sm:text-6xl">
            Le sucré, <em className="italic">au quotidien.</em>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Tartes de saison, entremets, viennoiseries et petits gâteaux : tout est
            préparé chaque jour dans notre laboratoire à Delémont.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((src, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-sm ${
                i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Pâtisserie Chez Werth ${i + 1}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24 text-center">
        <div className="divider-dots mx-auto mb-10 w-24 text-border" />
        <p className="font-display text-2xl italic text-foreground">
          « Une pause sucrée, c'est aussi un soin que l'on s'accorde. »
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Disponibles à la pièce sur place ou à emporter — passez nous voir Place de la
          Gare 14, à Delémont.
        </p>
      </section>
    </SiteLayout>
  );
}
