"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import styles from "./Reviews.module.css";

const reviews = [
  { id:1, text:"The most beautiful arrangement I've ever received in NYC.", author:"Eleanor V.", loc:"SoHo" },
  { id:2, text:"Flordel's attention to detail is unmatched. Truly luxury service.", author:"Marcus T.", loc:"Tribeca" },
  { id:3, text:"Stunning flowers, impeccable delivery. My go-to florist for every occasion.", author:"Sarah L.", loc:"Upper East Side" },
  { id:4, text:"Exceeded all expectations for our corporate gala. Breathtaking work.", author:"James W.", loc:"Midtown" },
  { id:5, text:"A true work of art. The quality and care is exceptional every time.", author:"Isabella M.", loc:"West Village" },
];

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(`.${styles.card}`);
      const total = cards.length - 1;

      // Set all but first to dim on mount
      cards.forEach((card, i) => {
        gsap.set(card, { opacity: i === 0 ? 1 : 0.18 });
      });

      // Horizontal scroll pin
      gsap.to(cards, {
        xPercent: -100 * total,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.4,
          snap: { snapTo: 1 / total, duration: 0.45, ease: "power1.inOut" },
          end: () => "+=" + (trackRef.current?.offsetWidth || 0),
          // On every scroll frame, light up the active card
          onUpdate: (self) => {
            const activeIndex = Math.round(self.progress * total);
            cards.forEach((card, i) => {
              gsap.to(card, {
                opacity: i === activeIndex ? 1 : 0.18,
                duration: 0.4,
                overwrite: "auto",
              });
            });
          },
        },
      });

    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Header */}
      <div className={`container ${styles.topBar}`}>
        <div>
          <p className={`label ${styles.eyebrow}`}>Client Stories</p>
          <h2 className={styles.title}>What they <em>say</em></h2>
        </div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_,i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}
          </div>
          <span className={styles.ratingLabel}>1,700+ Reviews</span>
        </div>
      </div>

      {/* Horizontal track */}
      <div className={styles.track} ref={trackRef}>
        {reviews.map((r) => (
          <div key={r.id} className={styles.card}>
            <p className={styles.quote}>&ldquo;{r.text}&rdquo;</p>
            <div className={styles.attr}>
              <span className={styles.author}>{r.author}</span>
              <span className={styles.loc}>{r.loc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
