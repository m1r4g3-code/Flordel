"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          
          {/* Mobile Menu Toggle (Visible only on mobile) */}
          <button 
            className={`${styles.iconBtn} ${styles.mobileMenuBtn}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>

          {/* Desktop Left Nav */}
          <nav className={styles.navLeft}>
            <Link href="/shop" className={styles.link}>Shop</Link>
            <Link href="/subscriptions" className={styles.link}>Subscriptions</Link>
          </nav>

          <Link href="/" className={styles.logo} onClick={closeMenu}>Flordel</Link>

          {/* Desktop Right Nav & Mobile Cart */}
          <nav className={styles.navRight}>
            <div className={styles.desktopOnly}>
              <Link href="/about" className={styles.link}>About</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
            <button className={styles.iconBtn} aria-label="Cart">
              <ShoppingBag size={17} strokeWidth={1.5} />
            </button>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/shop" className={styles.mobileLink} onClick={closeMenu}>Shop</Link>
          <Link href="/subscriptions" className={styles.mobileLink} onClick={closeMenu}>Subscriptions</Link>
          <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>About</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
