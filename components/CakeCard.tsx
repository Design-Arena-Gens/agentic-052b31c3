import type { CSSProperties } from "react";

export type CakeCardData = {
  name: string;
  price: string;
  description: string;
  servings: string;
  highlight: string;
  baseColor: string;
  frostingColor: string;
  accentColor: string;
};

export function CakeCard({ cake }: { cake: CakeCardData }) {
  const palette = {
    "--cake-base": cake.baseColor,
    "--frosting-color": cake.frostingColor,
    "--accent-color": cake.accentColor
  } as CSSProperties;

  return (
    <article className="cake-card" style={palette}>
      <div className="cake-card__canvas" aria-hidden="true">
        <span className="cake-card__plate" />
        <span className="cake-card__shadow" />
        <span className="cake-card__cake">
          <span className="cake-card__price" aria-hidden="true">
            {cake.price}
          </span>
          <span className="cake-card__spatula" />
        </span>
      </div>
      <div className="cake-card__content">
        <h3>{cake.name}</h3>
        <p className="cake-card__highlight">{cake.highlight}</p>
        <p className="cake-card__description">{cake.description}</p>
        <p className="cake-card__servings">{cake.servings}</p>
        <span className="sr-only">Price: {cake.price}</span>
      </div>
    </article>
  );
}
