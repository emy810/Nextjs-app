import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to My Next.js App</h1>

      <p className={styles.subtitle}>
        Explore the Cats and Dogs galleries by clicking the buttons below.
      </p>

      <div className={styles.buttons}>
        <Link href="/cats" className={styles.button}>
          View Cats
        </Link>
        <Link href="/dogs" className={styles.button}>
          View Dogs
        </Link>
      </div>
    </main>
  );
}
