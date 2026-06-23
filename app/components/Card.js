import styles from "./Card.module.css";
import LikeButton from "./LikeButton";

export default function Card({ image, name, blurb, rating }) {
    return (
        <article className={styles.card}>
            {image && (
                <div className={styles.image}>
                    <img
                        src={image}
                        alt={name}
                        className={styles.poster}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            )}
            
            <h2>{name}</h2>
            <h3>Recommended</h3>
            <p>{blurb}</p>
            <p className="stars">{"⭐".repeat(rating || 0)}</p>
            <LikeButton />  
        </article>
    );
}
