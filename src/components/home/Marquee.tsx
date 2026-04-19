"use client";

import styles from "./Marquee.module.css";

const ITEMS = [
  "Same Day Delivery NYC",
  "Custom Arrangements",
  "Seasonal Botanicals",
  "Event Florals",
  "Est. 2019",
  "1700+ Five-Star Reviews",
  "Bespoke Bouquets",
  "Corporate Floristry",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className={styles.marqueeContainer} aria-hidden="true">
      <div className={styles.marqueeContent}>
        {doubled.map((item, i) => (
          <>
            <span key={`t-${i}`} className={styles.item}>{item}</span>
            <span key={`d-${i}`} className={styles.dot} />
          </>
        ))}
      </div>
    </div>
  );
}
