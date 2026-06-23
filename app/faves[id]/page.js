import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
    return (
    <main>
    <Hero
    title="DRAGON MOTOR TESTING"
    tagline="AN EXPLORATION OF THE WORLD'S FASTEST CARS"
    />
    <CardGrid items={items} />
    </main>
    );
}
