import styles from "./dogs.module.css";
export default function Dogs() {
  const dogs = [
    { id: 1, image: "https://placedog.net/400/300", caption: "Sleepy dog" },
    { id: 2, image: "https://placedog.net/401/300", caption: "A loyal dog" },
    { id: 3, image: "https://placedog.net/402/300", caption: "A playful dog" },
    { id: 4, image: "https://placedog.net/500/280", caption: "A friendly dog" },
  ];
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to the Dogs Page</h1>

      <div className={styles.gallery}>
        {dogs.map((dog) => (
          <div key={dog.id} className={styles.card}>
            <img src={dog.image} alt="Dog" className={styles.image} />
            <p className={styles.caption}>{dog.caption}</p>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>Dogs bring joy 🐶</footer>
    </main>
  );
}
