"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { ABOUT } from "@/constants";
import Badge from "./Badge";
import Separator from "./Separator";

export default function About() {
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      scrollTriggerRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <ul
          ref={scrollableSectionRef}
          className="h-screen w-[300vw] flex relative"
        >
          {ABOUT.map((item, index) => (
            <li
              key={index}
              className="w-screen h-screen flex flex-col justify-center items-center relative"
            >
              <div className="container mx-auto px-4">
                <div className="flex gap-[30px] relative">
                  <div className="flex flex-1 flex-col justify-center items-center">
                    <Badge containerStyles="w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">
                          {item.title.split(" ")[1]}
                        </span>
                      </h2>
                      <div className="mb-8">
                        <Separator />
                      </div>
                      <p className="leading-relaxed mb-16 px-8 xl:px-0">
                        {item.description}
                      </p>
                      <button className="btn">See more</button>
                    </div>
                  </div>
                  <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                    <Image
                      src={item.imgSrc}
                      alt=""
                      fill
                      className="object-cover "
                      quality={100}
                      priority
                      sizes="(max-width: 1280px) 0px, 100%"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
