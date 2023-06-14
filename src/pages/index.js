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
    {
      name: "Quizard",
      desc: "Interactive quiz platform built with React, ChakraUI, and Python Flask, this platform offers an engaging and seamless user experience.",
      link: "https://quizard-rosy.vercel.app",
      ghLink: "https://github.com/jll38/quizard",
      year: 2023,
    },
  ];
  return (
    <>
      <Head>
        <title>Julian Lechner Web Developer</title>
      </Head>
      <div className="fixed h-screen w-screen bg-gradient-to-t from-gray-400 to-white -z-10 dark:hidden"></div>
      <main
        id="main"
        className="flex h-[90vh] flex-col items-center p-6 md:p-24 content-center justify-center text-white dark:bg-black"
      >
        <Navbar></Navbar>
        <SocialBox />
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl text-gray-800 dark:text-white ">
            Hi, I&apos;m
          </h1>
          <div className="text-transparent bg-clip-text bg-gradient-radial from-blue-600 to-blue-400 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700 ">
            <h1 className="text-5xl md:text-8xl font-bold" id="hero-name">
              Julian Lechner
            </h1>
            <h1 className="text-5xl md:text-8xl font-bold">Web Developer</h1>
          </div>
          <p className="mb-4 text-xl font-normal text-gray-800 dark:text-white">
            Responsive,{" "}
            <span className="dark:text-transparent dark:bg-clip-text text-blue-600 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700">
              Reliable
            </span>
            , and Robust Web Development.
          </p>
        </div>
        <button onClick={handleArrow1Click}>
          <i
            aria-label="Down Arrow Button to About Section"
            className={`${animations.bob} fa-solid fa-angle-down fa-xl text-blue-500 dark:text-purple-400`}
          ></i>
        </button>
      </main>

      <section
        ref={aboutRef}
        name="about"
        className="flex h-[85vh] flex-col px-16 content-center justify-center items-center text-gray-700 dark:bg-black dark:text-white bg-opacity-100"
      >
        <div className="flex flex-wrap mt-20 hide justify-center">
          <div className="w-full md:max-w-[550px]">
            <Sectionheader title={"About Me"} />
            <div>
              <div name="about-text" className="text-lg mt-8 pr-3">
                <p>
                  Hello! My name is{" "}
                  <span className="dark:text-transparent bg-clip-text bg-gradient-radial text-blue-500 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700 font-bold">
                    Julian Lechner
                  </span>
                  , and I am an enthusiastic web developer pursuing a Bachelor
                  of Science in Information Technology at New Jersey Institute
                  of Technology. As of now, I am currently seeking an internship
                  position where I can apply my skills.
                </p>
                <br />
                <p>
                  Apart from my technical skills, I take pride in my leadership
                  abilities, demonstrated through my involvement in my
                  fraternity, Phi Sigma Kappa.
                </p>
                <SpotifyViewer />
              </div>
            </div>
          </div>
          <div className="flex items-end relative w-[425px] h-[400px]">
            <Image
              className=" rounded-md bg-gradient-to-r dark:from-pink-500 dark:via-red-500 dark:to-yellow-400 from-blue-600 via-orange-400 to-blue-400 p-1 "
              src="/images/myself.png"
              alt="Picture of myself"
              fill
            ></Image>
          </div>
        </div>
        <button onClick={handleArrow2Click}>
          <i
            aria-label="Down Arrow Button"
            className={`${animations.bob} fa-solid fa-angle-down fa-xl text-blue-500 dark:text-purple-400 m-auto mt-10`}
          ></i>
        </button>
      </section>

      <section
        ref={skillsRef}
        name="my skills"
        className="flex h-[85vh] flex-col px-16 md:px-48 content-center justify-center dark:bg-black"
      >
        <Sectionheader title={"My Skills"} />
        <div className="flex flex-wrap justify-center gap-10 dark:text-white">
          <SkillCard
            logo={frontEndLogo}
            title={"Front End"}
            skills={frontEndSkills}
          />
          <SkillCard
            logo={backEndLogo}
            title={"Back End"}
            skills={backEndSkills}
          />
          <SkillCard logo={otherLogo} title={"Other"} skills={otherSkills} />
        </div>
        <button onClick={handleArrow3Click}>
          <i
            aria-label="Down Arrow Button"
            className={`${animations.bob} fa-solid fa-angle-down fa-xl text-blue-500 dark:text-purple-400 m-auto mt-10`}
          ></i>
        </button>
      </section>

      <section
        ref={featRef}
        name="features"
        className="flex h-[85vh] flex-col px-16 md:px-48 content-center justify-center dark:text-white dark:bg-black"
      >
        <div className="hide">
          <Sectionheader title={"Projects"} />
          <div className="xl:w-1/2 projects">
            {projects.map((project, i) => {
              return (
                <Project
                  key={"project-" + i}
                  name={project.name}
                  year={project.year}
                  link={project.link}
                  desc={project.desc}
                  ghLink={project.ghLink}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
