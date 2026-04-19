import Link from "next/link";
import styles from "./Footer.module.css";

const shopLinks = [
  { label: "All Arrangements", href: "/shop" },
  { label: "Designer's Choice", href: "/shop/designers-choice" },
  { label: "Mirror Bouquets",   href: "/shop/mirror-flower-bouquet" },
  { label: "Subscriptions",     href: "/subscriptions" },
];
const companyLinks = [
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
  { label: "Press",    href: "#" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>Flordel</h2>
            <p className={styles.tagline}>Botanical artistry<br />in New York City.</p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <p className={styles.colLabel}>Shop</p>
              <ul>{shopLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
            </div>
            <div className={styles.col}>
              <p className={styles.colLabel}>Company</p>
              <ul>{companyLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul>
            </div>
            <div className={styles.col}>
              <p className={styles.colLabel}>Visit</p>
              <address className={styles.addr}>
                78 Clinton St<br />New York, NY 10002<br /><br />
                Mon–Fri 7am–9pm<br />Sat–Sun 7am–7pm
              </address>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Flordel LLC.</p>
          <div className={styles.bottomLinks}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <a href="tel:2129603542">212-960-3542</a>
            <a href="mailto:info@flordel.nyc">info@flordel.nyc</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
