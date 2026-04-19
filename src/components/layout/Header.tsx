"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <nav className={styles.navLeft}>
          <Link href="/shop" className={styles.link}>Shop</Link>
          <Link href="/subscriptions" className={styles.link}>Subscriptions</Link>
        </nav>

        <Link href="/" className={styles.logo}>Flordel</Link>

        <nav className={styles.navRight}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <button className={styles.iconBtn} aria-label="Cart">
            <ShoppingBag size={17} strokeWidth={1.5} />
          </button>
        </nav>
      </div>
    </header>
  );
}
