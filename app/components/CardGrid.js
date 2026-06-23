import Card from "./Card";
//import {items} from "../data";
import styles from "./Card.module.css"
import Link from "next/link";
//import LikeButton from "./LikeButton";

export default function CardGrid({ items }) {
    return (
    <div className={styles.grid}>
        {items.map((item) => (

    <Link href={`/faves/${item.id}`} key={item.id}>


        <Card
            image={item.image}
            key={item.id}
            name={item.name}
            blurb={item.blurb}
            rating={item.rating}
            emoji={item.emoji}
        />
        </Link>
    
        ))}
        </div>
    );
}