import styles from "./cats.module.css";

export default function Cats() {
  const cats = [
    { id: 1, image: "https://placecats.com/400/300", caption: "Sleepy cat" },
    { id: 2, image: "https://placecats.com/401/300", caption: "A loyal cat" },
    { id: 3, image: "https://placecats.com/402/300", caption: "A playful cat" },
    {
      id: 4,
      image: "https://placecats.com/403/300",
      caption: "A friendly cat",
    },
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to the Cats Page</h1>

      <div className={styles.gallery}>
        {cats.map((cat) => (
          <div key={cat.id} className={styles.card}>
            <img src={cat.image} alt="Cat" className={styles.image} />
            <p className={styles.caption}>{cat.caption}</p>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>So many cute cats 🐱</footer>
    </main>
  );
}
