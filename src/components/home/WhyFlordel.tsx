"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhyFlordel.module.css";

const pillars = [
  { num: "01", title: "Hand-Selected", body: "Every bloom sourced from exclusive European and South American growers — chosen for their rarity and beauty." },
  { num: "02", title: "Same-Day NYC", body: "Order before 2pm. Arrive same day, beautifully packaged, perfectly fresh." },
  { num: "03", title: "1700+ Reviews", body: "A decade of five-star experiences, from intimate gifts to grand events." },
];

export function WhyFlordel() {
  const sectionRef  = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const pillarsRef  = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLDivElement>(null);
  const quoteRef    = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {

      // Statement block reveals
      gsap.fromTo(statementRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: statementRef.current, start: "top 80%" } }
      );

      // Each pillar flies in staggered
      const rows = gsap.utils.toArray<HTMLElement>(`.${styles.pillar}`);
      gsap.fromTo(rows,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: pillarsRef.current, start: "top 80%" } }
      );

      // Quote in video strip: scrub fade in + scale
      gsap.fromTo(quoteRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 1,
          scrollTrigger: { trigger: videoRef.current, start: "top 70%", toggleActions: "play none none reverse" } }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Two-col statement + pillars */}
      <div className={`container ${styles.grid}`}>
        <div className={styles.statement} ref={statementRef}>
          <p className={`label ${styles.eyebrow}`}>Why Flordel</p>
          <h2 className={styles.headline}>
            Flowers that<br /><em>speak volumes</em>
          </h2>
          <p className={styles.body}>
            We believe an arrangement is not just decoration — it is a
            feeling made tangible. Every stem is chosen. Every composition,
            considered.
          </p>
        </div>

        <div className={styles.pillars} ref={pillarsRef}>
          {pillars.map((p) => (
            <div key={p.num} className={styles.pillar}>
              <span className={styles.num}>{p.num}</span>
              <div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarBody}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed video with quote */}
      <div className={styles.videoStrip} ref={videoRef}>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-pink-rose-blooming-42345-large.mp4" type="video/mp4" />
        </video>
        <div className={styles.scrim} />
        <p className={styles.quote} ref={quoteRef}>
          &ldquo;Every arrangement is a conversation<br />between nature and art.&rdquo;
        </p>
      </div>
    </section>
  );
}
