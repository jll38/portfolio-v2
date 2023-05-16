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
  const backEndSkills = ["Node.JS", "SQL", "Python", "Restful APIs", "CMS", "", ""];
  const otherSkills = [
    "Git",
    "GitHub",
    "Heroku",
    "Webpack",
    "Docker",
    "VSCode",
    ""
  ];

  const frontEndLogo = "fa-brands fa-html5";
  const backEndLogo = "fa-solid fa-code";
  const otherLogo = "fa-solid fa-screwdriver-wrench";

  const projects = [
    {
      name: "Home Sync Hub",
      desc: "An affiliate marketing blog website that focuses on Smart Home technologies. Developed in NextJS and utilizes the Sanity content management system.",
      link: "https://homesynchub.com",
      year: 2023,
    },
    {
      name: "Quizard",
      desc: "Interactive quiz platform built with React, ChakraUI, and Python Flask, this platform offers an engaging and seamless user experience.",
      link: "https://github.com/jll38/quizard",
      year: 2023,
    },
    {
      name: "Youtube-DL",
      desc: "Web Application that allows users to download youtube videos while providing a valid url.",
      link: "https://github.com/jll38/react-flask-youtube-dl",
      year: 2023,
    },
    {
      name: "Reask Bank",
      desc: "A full stack banking application that stores and displays funds, transactions, and generated card information.",
      link: "https://github.com/jll38/flask-react-bank",
      year: 2022,
    },
  ];
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main
        id="main"
        className="flex min-h-screen flex-col items-center p-6 md:p-24 content-center justify-center text-white"
      >
        <Navbar></Navbar>
        <SocialBox />
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl text-gray-600 dark:text-white ">
            Hi, I&apos;m
          </h1>
          <div className="text-transparent bg-clip-text bg-gradient-radial from-blue-600 to-blue-400 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700 ">
            <h1 className="text-5xl md:text-8xl font-bold" id="hero-name">
              Julian Lechner
            </h1>
            <h1 className="text-5xl md:text-8xl font-bold">Web Developer</h1>
          </div>
          <p className="mb-4 text-xl font-normal text-gray-600 dark:text-white">
            Responsive,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-radial from-yellow-600 to-yellow-400 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700">
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
        className="flex min-h-screen flex-col px-16 md:px-48 content-center justify-center items-center text-gray-700 dark:bg-black dark:text-white bg-opacity-100"
      >
        <div className="flex flex-wrap mt-20 hide">
          <div className="w-full md:w-1/2">
            <Sectionheader title={"About Me"} />
            <div>
              <div name="about-text" className="text-lg mt-8 pr-3">
                <p>
                  Hello! My name is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-radial from-blue-600 to-blue-400 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700 font-bold">
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
          <div className="w-full md:w-1/2 flex items-end">
            <Image
              className="w-3/4 h-auto m-auto rounded-md bg-gradient-to-r dark:from-pink-500 dark:via-red-500 dark:to-yellow-500 from-blue-600 via-yellow-500 to-blue-400 p-1"
              src="/images/myself.png"
              alt="Picture of myself"
              width="500"
              height="500"
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
        className="flex min-h-screen flex-col px-16 md:px-48 content-center justify-center dark:bg-black"
      >
        <Sectionheader title={"My Skills"} />
        <div className="flex sm:flex-row flex-wrap sm:justify-between flex-col p-5 hide gap-10 hide dark:text-white">
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
        className="flex min-h-screen flex-col px-16 md:px-48 content-center justify-center dark:text-white dark:bg-black"
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
              />
            );
          })}
          </div>
        </div>
      </section>
    </>
  );
}
