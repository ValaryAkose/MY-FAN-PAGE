"use client";

import { useState } from "react";
import styles from "../page.module.css";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    return (
    <button  className={styles.LikeButton}
        onClick={() => setLiked(!liked)}>
        {liked ? "❤️ " : "🤍 "}
    </button>
    );
}
