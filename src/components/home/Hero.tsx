"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Hero.module.css";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // Parallax layers — each moves at a different rate
  const imgY      = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const eyebrowY  = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const opacity   = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className={styles.hero} ref={containerRef}>
      {/* Parallax bg image */}
      <motion.div className={styles.imgWrap} style={{ y: imgY }}>
        <Image
          src="/images/hero_user.jpg"
          alt="Flordel — Botanical Artistry"
          fill priority quality={95}
          className={styles.img}
        />
        {/* Ink-to-transparent overlay so text is legible at bottom */}
        <div className={styles.overlay} />
      </motion.div>

      {/* Text centred */}
      <motion.div className={styles.content} style={{ opacity }}>
        <motion.p className={styles.eyebrow} style={{ y: eyebrowY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16,1,0.3,1] }}
        >
          Est. 2019 &nbsp;·&nbsp; Lower East Side, New York
        </motion.p>

        <motion.h1 className={styles.headline} style={{ y: headlineY }}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.16,1,0.3,1] }}
        >
          The Art of<br /><em>Living Beautifully</em>
        </motion.h1>

        <motion.p className={styles.sub}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16,1,0.3,1] }}
        >
          Bespoke floral design, thoughtfully crafted.
        </motion.p>

        <motion.div className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16,1,0.3,1] }}
        >
          <Link href="/shop" className={`btn btn-ink ${styles.cta}`}>
            Explore Collection
          </Link>
          <Link href="/about" className={styles.ghost}>Our Story →</Link>
        </motion.div>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div className={styles.scrollNudge}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <div className={styles.line} />
        <span className={styles.scrollLabel}>Scroll</span>
      </motion.div>
    </section>
  );
}
