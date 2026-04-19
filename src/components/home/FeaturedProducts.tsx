"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import styles from "./FeaturedProducts.module.css";

const products = [
  { id: 1, title: "Designer's Choice", desc: "Curated by our florists daily", price: "From $85", image: "/images/designers_choice.png", slug: "designers-choice", tag: "Bestseller" },
  { id: 2, title: "Mirror Bouquet", desc: "Sculptural stems, gallery-worthy", price: "From $120", image: "/images/mirror_bouquet.png", slug: "mirror-flower-bouquet", tag: "Signature" },
  { id: 3, title: "Flordel Special", desc: "Our most iconic arrangement", price: "From $150", image: "/images/flordel_special.png", slug: "flordel-special-bouquet", tag: "Exclusive" },
];

export function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef   = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {

      // Header slides in
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" } }
      );

      // Cards stagger in with scale
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 80, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
            delay: i * 0.12 }
        );
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.inner}`}>

        {/* Header */}
        <div className={styles.head} ref={headRef}>
          <div>
            <p className={`label ${styles.eyebrow}`}>Collection</p>
            <h2 className={styles.title}>Handpicked<br /><em>for You</em></h2>
          </div>
          <Link href="/shop" className={`btn btn-link ${styles.viewAll}`}>
            View all <ArrowUpRight size={13} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid} ref={gridRef}>
          {products.map((p) => (
            <Link href={`/shop/${p.slug}`} key={p.id} className={styles.card}>
              <div className={styles.imgBox}>
                {p.tag && <span className={styles.pill}>{p.tag}</span>}
                <Image src={p.image} alt={p.title} fill
                  className={styles.img}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>
              <div className={styles.meta}>
                <div>
                  <h3 className={styles.name}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                </div>
                <span className={styles.price}>{p.price}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* See More */}
        <div className={styles.seeMore}>
          <Link href="/shop" className={`btn btn-outline ${styles.seeMoreBtn}`}>
            See All Arrangements
          </Link>
        </div>

      </div>
    </section>
  );
}
