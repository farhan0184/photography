import React from "react";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import NewsLetter from "@/components/NewsLetter";


export default function Home(): React.JSX.Element {
  return (
    <main>
      <Hero/>
      <Features />
      <Services />
      <Gallery/>
      <Reviews/>
      <Faq/>
      <NewsLetter/>
    </main>
  );
}
