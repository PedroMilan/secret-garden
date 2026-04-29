"use client";

import { Actives } from "@/components/Actives";
import { FindUs } from "@/components/FindUs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { OurStory } from "@/components/OurStory";
import { Packaging } from "@/components/Packaging";
import { Pricing } from "@/components/Pricing";
import { Product } from "@/components/Product";
import { Target } from "@/components/Target";

import React from "react";

export default function Home() {
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Hero />
      <OurStory />
      <Product />
      <HowItWorks />
      <Actives />
      <Target />
      <Packaging />
      <Pricing />
      <FindUs />
      <Footer />
    </div>
  );
}
