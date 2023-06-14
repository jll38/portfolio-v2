import { SkillCard } from "./../components/SkillCard";
import { Sectionheader } from "./../components/sectionheader";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import BGAnim from "@/components/BG-Anim";
import Navbar from "@/components/Navbar";
import SocialBox from "@/components/socialbox";
import animations from "../styles/animations.module.css";
import SpotifyViewer from "@/components/SongDisplay";
import Project from "@/components/Project";

import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aboutRef = useRef(null);
  const featRef = useRef(null);
  const skillsRef = useRef(null);

  //Smooth scrolls down to about section
  const handleArrow1Click = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //Smooth scrols to skills section
  const handleArrow2Click = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //Smooth scrols to projects section
  const handleArrow3Click = () => {
    featRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.JS",
    "TailwindCSS",
    "Bootstrap",
  ];
  const backEndSkills = [
    "Node.JS",
    "SQL",
    "Python",
    "Restful APIs",
    "CMS",
    "",
    "",
  ];
  const otherSkills = [
    "Git",
    "GitHub",
    "Heroku",
    "Webpack",
    "Docker",
    "VSCode",
    "",
  ];

  const frontEndLogo = "fa-brands fa-html5";
  const backEndLogo = "fa-solid fa-code";
  const otherLogo = "fa-solid fa-screwdriver-wrench";

  const projects = [
    {
      name: "Atlas Gym",
      desc: "This project aims to develop a modern and user-friendly front-end website for Atlas Gym. It includes features such as membership information, class schedules, trainer profiles, testimonials, contact details, and social media integration.",
      link: "https://gym-site-psi.vercel.app",
      ghLink: "https://github.com/jll38/gym-site",
      year: 2023,
    },
    {
      name: "Quizard",
      desc: "Interactive quiz platform built with React, ChakraUI, and Python Flask, this platform offers an engaging and seamless user experience.",
      link: "https://quizard-rosy.vercel.app/",
      ghLink: "https://github.com/jll38/quizard",
      year: 2023,
    },
    {
      name: "Netflix Clone",
      desc: "A recreation of the Netflix webpage created with Next.js and Tailwind.",
      link: "https://netflix-clone-git-main-jll38.vercel.app/",
      ghLink: "https://github.com/jll38/netflix-clone",
      year: 2023,
    },
    {
      name: "Home Sync Hub",
      desc: "An affiliate marketing blog website that focuses on Smart Home technologies. Developed in NextJS and utilizes the Sanity content management system.",
      link: "https://homesynchub.com/",
      ghLink: "https://github.com/jll38/affiliate-marketing-site",
      year: 2023,
    },
    {},
  ];
  return (
    <>
      <Head>
        <title>Julian Lechner Web Developer</title>
      </Head>
      <div className="fixed h-screen w-screen bg-gradient-to-t from-gray-400 to-white -z-10 dark:hidden"></div>
      <main id="main">
        <Navbar></Navbar>
        <section id="hero" className="h-[800px] bg-white flex">
          <div className="absolute w-full h-[800px]  mx-auto">
            <div className="flex w-full h-full justify-center items-center">
              <div id="hero-ball" className="w-[200px] h-[200px] relative bg-white rounded-full flex items-center justify-center px-4">
                <div className="text-aero text-3xl text-center font-bold">LOOKING FOR WORK</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full bg-aero flex flex-col justify-center items-center text-left md:px-0">
            <div className="flex flex-col items-center sm:max-w-sm lg:max-w-lg sm:px-0 px-8">
              <h1 className="uppercase font-bold tracking-[-.06em] w-full text-[350%] sm:text-[400%] lg:text-[500%] leading-[.8em]">
                Julian Lechner <br /> Front End Developer
              </h1>
              <div
                id="hero-about"
                className="flex flex-col mt-12 font-semibold w-full"
              >
                <div className="text-prussian text-[1.2em] sm:text-[.8em] md:text-[1em] mb-2">
                  &#47;&#47; ABOUT ME
                </div>
                <div className="md:text-[1.6em] sm:text-[2em] text-[2em]">
                  Experienced developer in the New York City area
                </div>
                <div className="tracking-normal font-medium">
                  I&apos;m a frontend developer with a commitment to building
                  user-centric, responsive websites and applications that
                  prioritize user experience without sacrificing speed or
                  functionality.
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/2 h-full bg-cerulean"></div>
        </section>
        <section></section>

        <div></div>
      </main>
    </>
  );
}
