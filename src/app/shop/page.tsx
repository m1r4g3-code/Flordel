"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import styles from "./page.module.css";

const CATEGORIES = ["All", "Bouquets", "Roses", "Seasonal", "Plants", "Occasions"];

const products = [
  { id: 1,  title: "Designer's Choice",     desc: "Curated by our florists daily",       price: "From $85",  image: "/images/designers_choice.png", slug: "designers-choice",        cat: "Bouquets",  tag: "Bestseller" },
  { id: 2,  title: "Mirror Bouquet",         desc: "Sculptural stems, gallery-worthy",    price: "From $120", image: "/images/mirror_bouquet.png",   slug: "mirror-flower-bouquet",   cat: "Bouquets",  tag: "Signature"  },
  { id: 3,  title: "Flordel Special",        desc: "Our most iconic arrangement",         price: "From $150", image: "/images/flordel_special.png",  slug: "flordel-special-bouquet", cat: "Bouquets",  tag: "Exclusive"  },
  { id: 4,  title: "White Orchid Plant",     desc: "Elegant long-lasting botanicals",     price: "$95",       image: "/images/designers_choice.png", slug: "white-orchid-plant",      cat: "Plants",    tag: null         },
  { id: 5,  title: "Lush Greenery",          desc: "Modern sculptural foliage",           price: "$110",      image: "/images/flordel_special.png",  slug: "lush-greenery",           cat: "Plants",    tag: null         },
  { id: 6,  title: "Pastel Dream Bouquet",   desc: "Soft tones, effortlessly graceful",  price: "$130",      image: "/images/mirror_bouquet.png",   slug: "pastel-dream",            cat: "Seasonal",  tag: "New"        },
  { id: 7,  title: "Garden Rose Collection", desc: "Rare varieties, hand-sourced",        price: "From $95",  image: "/images/designers_choice.png", slug: "garden-roses",            cat: "Roses",     tag: null         },
  { id: 8,  title: "Romance Bouquet",        desc: "For love, birthdays & beyond",        price: "From $115", image: "/images/flordel_special.png",  slug: "romance-bouquet",         cat: "Occasions", tag: null         },
  { id: 9,  title: "Sympathy Arrangement",   desc: "Thoughtful, tasteful, timeless",      price: "From $140", image: "/images/mirror_bouquet.png",   slug: "sympathy",                cat: "Occasions", tag: null         },
];


export default function ShopPage() {
  const [active, setActive] = useState("All");
  const heroRef  = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? products : products.filter(p => p.cat === active);

  // Hero text entrance — runs once on mount only
  useEffect(() => {
    if (!heroRef.current) return;
    const lines = heroRef.current.querySelectorAll<HTMLElement>(".shopHeroLine");
    gsap.fromTo(lines,
      { y: "110%", opacity: 0 },
      { y: "0%", opacity: 1, stagger: 0.12, duration: 1.1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <div className={styles.page}>

      {/* ─── Hero ─── */}
      <div className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg}>
          <Image src="/images/hero_user.jpg" alt="Flordel Shop" fill priority quality={90} className={styles.heroBgImg} />
          <div className={styles.heroScrim} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroEye}>78 Clinton St, New York · Same-Day Delivery</p>
          <h1 className={styles.heroTitle}>
            <span className="shopHeroLine" style={{ display: "block", overflow: "hidden" }}>All</span>
            <span className="shopHeroLine" style={{ display: "block", overflow: "hidden", fontStyle: "italic" }}>Arrangements</span>
          </h1>
          <p className={`shopHeroLine ${styles.heroSub}`}>
            {products.length} curated selections, each one handcrafted.
          </p>
        </div>
      </div>

      {/* ─── Filter Bar ─── */}
      <div className={styles.filterWrap}>
        <div className={`container ${styles.filterInner}`}>
          <div className={styles.filters}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className={styles.count}>{filtered.length} items</p>
        </div>
      </div>

      {/* ─── Product Grid ─── 
          Key on active forces full remount — avoids GSAP/React DOM conflict entirely */}
      <div className={`container ${styles.gridWrap}`}>
        <div className={styles.grid} key={active}>
          {filtered.map((p, i) => (
            <Link
              href={`/shop/${p.slug}`}
              key={p.id}
              className={styles.card}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className={styles.imgBox}>
                {p.tag && <span className={styles.pill}>{p.tag}</span>}
                <Image
                  src={p.image} alt={p.title} fill
                  className={styles.img}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className={styles.imgOverlay}>
                  <span className={styles.quickView}>
                    View <ArrowUpRight size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
              <div className={styles.meta}>
                <div className={styles.metaLeft}>
                  <h3 className={styles.name}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                </div>
                <span className={styles.price}>{p.price}</span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p>No arrangements in this category yet.</p>
          </div>
        )}
      </div>

      {/* ─── Bottom CTA ─── */}
      <div className={styles.ctaStrip}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Can&apos;t decide?</h2>
            <p className={styles.ctaSub}>Let our florists handpick for you.</p>
          </div>
          <Link href="/contact" className={`btn btn-ink ${styles.ctaBtn}`}>
            Get a Custom Arrangement
          </Link>
        </div>
      </div>

    </div>
  );
}
