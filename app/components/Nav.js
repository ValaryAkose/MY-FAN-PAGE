import Link from "next/link";
import styles from './Nav.module.css';

export default function Nav() {
    return (
    <nav className={styles.navbar}>
      {/* Cinematic Logo Branding */}
        <div className={styles.logo}>
        <Link href="/">
            <span>VALARY</span>SPHERE
        </Link>
        </div>

        <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/movies">Movies</Link></li>
        <li><Link href="/faves">My Favorites</Link></li>
        </ul>
    </nav>
    );
}
