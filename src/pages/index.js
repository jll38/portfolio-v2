import { ProjectCard } from "./../components/ProjectCard";
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
import IntroAnim from "@/components/introAnim";

import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const aboutRef = useRef(null);
  const featRef = useRef(null);
  const skillsRef = useRef(null);
  const lookingForWork = true;
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

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "React",
    "NextJS",
    "Express",
    "MongoDB",
    "Redux",
    "Git",
    "Github",
    "SQL",
    "Docker",
    "CMS",
    "RESTful APIs",
    "SEO",
  ];

  const projects = [
    {
      name: "TinyClicks",
      desc:"TinyClicks is a URL shortening service with an analytics dashboard. Built using Next.JS 13, backed by Prisma and MongoDB for data management",
      link: "http://tinyclicks.co",
      img: "/images/tinyclicks.png",
      ghLink: "https://github.com/jll38/url-shortener",
      year: 2023
    },
    {
      name: "NJITBytes",
      desc: "NJITBytes is an application that serves live menus for GDS at NJIT. It also provides AI-powered personalized meal recommendations based on user information like height, weight, age, and dietary restrictions and goals.",
      link: "https://njitbytes.co",
      img: "/images/bytes.png",
      ghLink: "https://github.com/jll38/njitbytes",
      year: 2023,
    },
    {
      name: "Atlas Gym (Business Site)",
      desc: "This project aims to develop a modern and user-friendly front-end website for Atlas Gym. It includes features such as membership information, class schedules, trainer profiles, testimonials, contact details, and social media integration.",
      link: "https://gym-site-psi.vercel.app",
      img: "/images/atlas-gym.webp",
      ghLink: "https://github.com/jll38/gym-site",
      year: 2023,
    },
    {
      name: "Quizard (Quiz Platform)",
      desc: "Interactive quiz platform built with React, ChakraUI, and Python Flask, this platform offers an engaging and seamless user experience.",
      link: "https://quizard-rosy.vercel.app/",
      img: "/images/quizard.webp",
      ghLink: "https://github.com/jll38/quizard",
      year: 2023,
    },
    {
      name: "Home Sync Hub (Marketing Site)",
      desc: "An affiliate marketing blog website that focuses on Smart Home technologies. Developed in NextJS and utilizes the Sanity content management system.",
      link: "https://homesynchub.com/",
      img: "/images/hsh.webp",
      ghLink: "https://github.com/jll38/affiliate-marketing-site",
      year: 2023,
    },
  ];

  return (
    <>
      <Head>
        <title>Julian Lechner Web Developer</title>
      </Head>
      <div className="fixed h-screen w-screen bg-gradient-to-t from-gray-400 to-white -z-10"></div>
      <IntroAnim />
      <SpotifyViewer />
      <main id="main">
        <Navbar></Navbar>
        <section
          id="hero"
          className="h-[800px] bg-[url('/images/pexels-chris-schippers-421927.webp')] bg-cover flex"
        >
          {lookingForWork ? (
            <div className="absolute w-full h-[800px] mx-auto hidden md:block">
              <div className="flex w-full h-full justify-center items-center">
                <div
                  id="hero-ball"
                  className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] relative bg-white rounded-full flex items-center justify-center px-4"
                >
                  <div className="text-aero text-[.75em] lg:text-3xl text-center font-bold">
                    LOOKING FOR WORK
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="w-full md:w-1/2 h-full bg-aero/90 flex flex-col justify-center items-center text-left md:px-0">
            <div className="flex flex-col items-center sm:max-w-sm lg:max-w-lg sm:px-0 px-8">
              <h1 className="uppercase font-bold tracking-[-.06em] w-full text-[350%] sm:text-[400%] lg:text-[500%] leading-[.8em]">
                Julian Lechner <br /> Frontend Developer
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
                  I&apos;m a Front End developer with a commitment to building
                  user-centric, responsive websites and applications that
                  prioritize user experience without sacrificing speed or
                  functionality.
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-1/2 h-full bg-cerulean/75 md:flex justify-center items-end overflow-hidden">
            <div className="relative">
              <Image
                id="hero-img-julian"
                src="/images/lechner.webp"
                alt="Picture of Julian Lechner"
                width={600}
                height={800}
                className="relative -bottom-3"
              />
            </div>
          </div>
        </section>
        <section
          id="tech-stack"
          className="bg-prussian flex flex-wrap items-center justify-around gap-20 px-24 py-10"
        >
          <Image
            src="/images/html.webp"
            alt="HTML"
            width={75}
            height={50}
            className="opacity-75 hover:opacity-100"
          />
          <Image
            src="/images/css.webp"
            alt="CSS"
            width={75}
            height={50}
            className="opacity-75 hover:opacity-100"
          />
          <Image
            src="/images/js.png"
            alt="JavaScript"
            width={75}
            height={50}
            className="opacity-75 hover:opacity-100 rounded-lg"
          />

          <Image
            src="/images/react.webp"
            alt="React"
            width={200}
            height={50}
            className="opacity-75 hover:opacity-100"
          />
          <Image
            src="/images/nextjs.webp"
            alt="Next.JS"
            width={200}
            height={50}
            className="opacity-75 hover:opacity-100"
          />
          <div className="text-6xl opacity-75 hover:opacity-100">Python</div>
        </section>
        <section
          id="projects"
          className="bg-[url('/images/hex.webp')] bg-repeat"
        >
          <div className="bg-gray-300/75 flex flex-col py-4">
            <div className="flex flex-col justify-center items-center">
              <div className="text-gray-900 tracking-tighter font-semibold text-[2em]">
                Latest Projects
              </div>
              <div className="flex flex-wrap justify-center">
                {projects.map((project, i) => (
                  <ProjectCard
                    key={"Project-" + i}
                    title={project.name}
                    desc={project.desc}
                    img={project.img}
                    link={project.link}
                    ghLink={project.ghLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="about-me"
          className="bg-cerulean flex items-center flex-col py-12"
        >
          <div className="flex flex-col items-center w-full gap-4">
            <h2 className="uppercase font-semibold text-4xl">About Me</h2>
            <div className="h-[4px] w-[100px] bg-aero"></div>
            <div className="w-1/2 text-md text-center font-medium text-gray-200">
              Here you&apos;ll get to know me, what I do, and my technical
              skills in front end development
            </div>
          </div>

          <div className="lg:border-2 lg:w-[1024px] flex flex-wrap justify-center my-10">
            <div className="w-[350px] sm:w-[500px] sm:p-6">
              <div className="text-2xl font-semibold">About Myself</div>
              <div className="h-[4px] w-[150px] bg-aero"></div>
              <div className="font-medium mt-4 text-lg">
                I&apos;m your friendly neighborhood frontend developer,
                developing responsive and efficient websites in order to provide
                an excellent user experience.
                <br />
                <br />
                For as long as I can remember, I&apos;ve loved solving complex
                problems and creating things that work. When I&apos;m not
                developing project or working towards my degree, you&apos;ll
                find me in the gym, going out with friends, on motorcycle rides,
                and trying to live life to the fullest.
              </div>
            </div>
            <div className="w-[350px] sm:w-[500px] sm:p-6 pt-10">
              <div className="text-2xl font-semibold">
                <i class="fa-solid fa-graduation-cap"></i> Education
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-[.8em] sm:text-lg">
                    New Jersey Institute of Technology
                  </div>
                  <div className="text-gray-200 text-[.7em] sm:text-xs">
                    Bachelor of Science in Information Technology
                  </div>
                  <div className="text-gray-200 text-[.7em] sm:text-xs">
                    Mobile & Web Minor
                  </div>
                </div>
                <div>
                  <div className="text-[.8em] sm:text-lg">Newark, NJ</div>
                  <div className="text-[.7em] text-right">Class of 2024</div>
                </div>
              </div>
              <div className="text-2xl font-semibold mt-6">
                <i class="fa-solid fa-briefcase"></i> Experience
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-[.8em] sm:text-lg">Project Manager</div>
                  <div className="text-gray-200 text-[.7em] sm:text-xs">
                    Eco-Enterprise
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="text-[.8em] sm:text-lg">
                    React Developer Intern
                  </div>
                  <div className="text-gray-200 text-[.7em] sm:text-xs">
                    SkyIT Services | Subsidiary of GBCS Group
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:p-6 pt-10">
              <div className="text-2xl font-semibold mt-6">
                <i class="fa-solid fa-code"></i> Skills
                <ul class="text-black flex flex-wrap text-[0.65rem] mt-2">
                  {skills.map((skill, i) => {
                    return (
                      <li key={`skill-${i}`} class="bg-aero text-gray-100  text-[1.04rem] font-semibold mb-4 mr-4 py-3 px-5 rounded">
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="bg-cerulean flex items-center flex-col py-12 h-[400px]"
        >
          <div className="flex flex-col items-center w-full gap-4">
            <h2 className="uppercase font-semibold text-4xl">Contact</h2>
            <div className="h-[4px] w-[100px] bg-aero"></div>
            <div className="w-1/2 text-2xl text-center font-medium text-gray-200">
              Get in touch with me on <br />
              <Link
                href="https://linkedin.com/in/julianllechner"
                className="font-bold"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </Link>
              <br />
              <Link href="mailto:jll38@njit.edu" className="font-bold">
                <i className="fa-solid fa-envelope"></i> Email
              </Link>
            </div>
          </div>
        </section>{" "}
      </main>
    </>
  );
}
