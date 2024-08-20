"use client";
import { useEffect } from "react";

import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu/Menu";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";

export default function Home() {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}
