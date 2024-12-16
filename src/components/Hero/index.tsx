import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import Image from "next/image";
import { Bounded } from "../Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {};

export default function Hero({ }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
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
      })
      .fromTo(
        "body",
        { backgroundColor: "#fde047", overwrite: "auto", duration: 2 },
        { backgroundColor: "#d9f99d", overwrite: "auto", duration: 2 },
        3,
      );
  });
  return (
    <Bounded className="hero opacity-0 snap-proximity">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-0 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
        </View>
      )}
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
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl snap-center">
              <TextSplitter text="Try all five flavors" />
            </h2>
            <p className="text-side-body mt-4 max-w-xl text-balance text-xl font-medium text-sky-950">
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
