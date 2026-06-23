import  {items}  from "./data";
import Hero from "./components/Hero";
import styles from "./page.module.css";
import LikeButton from "./components/LikeButton";

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: "center", marginTop: "40px", color: "black" }}>
        🎥My Favorite Movies
      </h1>
      <p>
        A few movies I could recommmend I ,that are awesome — and thats why
        they're worth your time.
      </p>

      <div className={styles.grid}>
        {items.map((item) => (
          <article className={styles.card} key={item.id}>
            <div> <img src ={item.image} alt={item.name} width={300} height={200}/></div>
            <h2>{item.name}</h2>
            <p>{item.blurb}</p>
            <p className={styles.stars}>{"⭐".repeat(item.rating)}</p>

            <LikeButton />

          </article>
        ))}
      </div>
      <Hero 
        title=" 🎥Best movies"
        tagline="A few movies I could watch forever — and why they're worth your time."
      />
    </main>
  );
}
