import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "About Us | Flordel Florist",
  description: "Learn about the botanical artistry and history behind Flordel Florist in New York City.",
};

export default function About() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.header}`}>
        <h1 className={styles.title}>Our Story</h1>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={`rounded-media ${styles.imageWrapper}`}>
          {/* Reusing existing image as placeholder */}
          <Image 
            src="/images/designers_choice.png" 
            alt="Flordel Floral Design Studio" 
            fill 
            className={styles.image} 
          />
        </div>
        
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Established 2019</h2>
          <p className={styles.paragraph}>
            Located in the heart of the Lower East Side at 78 Clinton St, Flordel emerged from a passion for botanical artistry and a desire to bring unparalleled luxury to New York City&apos;s floral landscape.
          </p>
          <p className={styles.paragraph}>
            Our philosophy is simple: source the most extraordinary blooms from exclusive growers around the world and let their natural beauty take center stage. Each arrangement is meticulously crafted to evoke emotion and elevate any space it occupies.
          </p>
          <p className={styles.paragraph}>
            With over 1,700 five-star reviews, our commitment to quality, aesthetic precision, and impeccable service has made us the premier choice for discerning clients seeking sophisticated floral design.
          </p>
        </div>
      </div>
    </div>
  );
}
