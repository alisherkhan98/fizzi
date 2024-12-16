"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";

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
        markers: true,
        scrub: 1.5,
      },
    });

    scrollTL
      .fromTo(
        "body",
        { backgroundColor: "#fde047" },
        { backgroundColor: "#d9f99d", overwrite: "auto" },
        1,
    )
      .from(".text-side-heading .split-char", {
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
      });
  });

  return <Hero />;
}
