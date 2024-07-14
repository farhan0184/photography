import React from "react";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";


export default function Home(): React.JSX.Element {
  return (
    <main>
      <Hero/>
      <Features />
      <Services />
      <Gallery/>
    </main>
  );
}
