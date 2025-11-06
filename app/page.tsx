import { CakeCard, type CakeCardData } from "@/components/CakeCard";

const cakes: CakeCardData[] = [
  {
    name: "Maple Street Morning",
    price: "$36",
    description:
      "Vanilla bean chiffon layered with caramelized maple buttercream and a toasted oat crumble finish.",
    servings: "Serves 8-10 • Ready with 48 hours notice",
    highlight: "Maple frosting that shimmers under the morning sun",
    baseColor: "#f2c388",
    frostingColor: "#f8e3cf",
    accentColor: "#9d4f2c"
  },
  {
    name: "Garden Gate Pistachio",
    price: "$42",
    description:
      "Soft pistachio sponge, rosewater jam, and whipped mascarpone frosting with candied petals.",
    servings: "Serves 10-12 • Custom florals available",
    highlight: "Delicate rose-kissed frosting with a pistachio crunch",
    baseColor: "#d4c39f",
    frostingColor: "#f5ebe2",
    accentColor: "#7b8c69"
  },
  {
    name: "Moonlit Blackberry Velvet",
    price: "$48",
    description:
      "Black cocoa layers with blackberry compote, lavender frosting, and sugared violets on top.",
    servings: "Serves 10-12 • Best enjoyed after dusk",
    highlight: "Lavender frosting that glows under café lights",
    baseColor: "#3f2e4f",
    frostingColor: "#e7dcf4",
    accentColor: "#8c6cc2"
  },
  {
    name: "Sunny Porch Lemon",
    price: "$34",
    description:
      "Lemon yogurt cake, honeyed lemon curd, and whipped meringue frosting with candied peel.",
    servings: "Serves 6-8 • Weekend pickups",
    highlight: "Meringue frosting that swirls like porchlight glow",
    baseColor: "#f7d860",
    frostingColor: "#fff1c7",
    accentColor: "#c78d2d"
  }
];

export default function HomePage() {
  return (
    <main className="site">
      <header className="hero">
        <p className="hero__greeting">Welcome to Maple &amp; Main Bakery</p>
        <h1>Small-town cakes with big heart</h1>
        <p className="hero__lede">
          Pull up a chair, watch the frosting sweep across our signature cakes, and
          find the one that tastes like home.
        </p>
        <div className="hero__cta">
          <a className="hero__button" href="#cakes">
            View the Frosting Parade
          </a>
          <a className="hero__link" href="mailto:hello@mapleandmain.bake">
            hello@mapleandmain.bake
          </a>
        </div>
      </header>

      <section className="gallery" aria-label="Signature cakes" id="cakes">
        {cakes.map((cake) => (
          <CakeCard key={cake.name} cake={cake} />
        ))}
      </section>

      <section className="visit">
        <div className="visit__card">
          <h2>Visit the bakery</h2>
          <p>
            12 Main Street, Maplebrook • Open Wednesday through Sunday, 7am to 4pm.
            Call (555) 013-CAKE for custom designs or delivery around the valley.
          </p>
          <p>
            We frost each cake by hand, so hover over any cake to see the price as
            the frosting spreads. Orders placed before noon are ready the next day.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Maple &amp; Main Bakery • Baked with love in Maplebrook</p>
      </footer>
    </main>
  );
}
