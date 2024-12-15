"use client";

import { Bounded } from "@/components/Bounded";
import Image from "next/image";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    const introTL = gsap.timeline();
    introTL
      .set(".hero", {
        opacity: 1,
      })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.5,
        stagger: 0.8,
      })
      .from(
        ".hero-subheading",
        {
          y: 30,
          opacity: 0,
        },
        "+=0.8",
      )
      .from(".hero-body", {
        y: 10,
        opacity: 0,
      })
      .from(".button", {
        y: 10,
        opacity: 0,
        duration: 0.6,
      });

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
        markers: true,
      },
    });

    scrollTL.fromTo(
      "body",
      { backgroundColor: "#fde047" },
      { backgroundColor: "#d9f99d", },
      1,
    ).from(".text-side-heading .split-char", {
      y: 40,
      scale: 1.2,
      opacity: 0,
      rotate: -25,
      stagger: 0.5,
      ease: "back.out(3)",
      duration: 1,
    })
      .from(".text-side-body", {
        y: 30,
        opacity: 0,
        duration: 1,
      })
  });

  return (
    <Bounded className=" hero opacity-0">
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="text-7xl font-black uppercase leading-none text-orange-500 md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text="Live Gutsy"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <h2 className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              Soda perfected
            </h2>
            <p className="hero-body mt-8 text-2xl text-sky-950">
              3g sugar. 9g fiber. 5 delicious flavors.
            </p>
            <Button label="Shop Now" className="button mt-8" />
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src="/all-cans-bunched.png"
            alt="flavors"
            width={500}
            height={500}
            className="w-full md:hidden"
          />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text="Try all five flavors" />
            </h2>
            <p className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
              Our soda is made of 100% natural ingredients. We have 5 delicious
              flavors to choose from. No artificial sweeteners, no
              preservatives, no artificial colors.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
