import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyFlordel } from "@/components/home/WhyFlordel";
import { Reviews } from "@/components/home/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProducts />
      <WhyFlordel />
      <Reviews />
    </>
  );
}
