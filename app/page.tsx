import React from "react";
import Features from "@/components/Features";
import Hero from "@/components/Hero";


export default function Home(): React.JSX.Element {
  return (
    <main>
      <Hero/>
      <Features/>
    </main>
  );
}
