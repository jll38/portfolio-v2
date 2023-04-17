import { Sectionheader } from './../components/sectionheader';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import BGAnim from '@/components/BG-Anim';
import Navbar from '@/components/Navbar';
import SocialBox from '@/components/socialbox';
import animations from '../styles/animations.module.css';
import SpotifyViewer from '@/components/SongDisplay';

import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  const aboutRef = useRef(null);
  const featRef = useRef(null);

  //Smooth scrolls down to about section
  const handleArrow1Click = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  //Smooth scrols to project section
  const handleArrow2Click = () => {
    featRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main id="main" className="flex min-h-screen flex-col items-center p-6 md:p-24 content-center justify-center">
        <Navbar></Navbar>
        <SocialBox />
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl text-gray-600 dark:text-gray-300">Hi, I&apos;m</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700">
            <h1 className="text-5xl md:text-8xl font-bold">Julian Lechner</h1>
            <h1 className="text-5xl md:text-8xl font-bold">Web Developer</h1>
          </div>
          <p className="mb-4 text-xl font-normal text-gray-600 dark:text-gray-300">
            Responsive, <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700">Reliable</span>, and Robust Web Development.</p>
        </div>
        <button onClick={handleArrow1Click}><i aria-label='Down Arrow Button to About Section' className={`${animations.bob} fa-solid fa-angle-down fa-xl text-purple-400`}></i></button>
      </main>

      <section ref={aboutRef} name="about" className="flex min-h-screen flex-col px-16 md:px-48 content-center justify-center items-center">
        <div className='flex flex-wrap mt-20'>
          <div className="w-full md:w-1/2">
            <Sectionheader title={'About Me'} />
            <div>
              <div name="about-text" className="text-lg mt-8 pr-3">
                <p>
                  Hello! My name is <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 font-bold">
                    Julian Lechner</span>,
                  and I am an enthusiastic web developer pursuing a
                  Bachelor of Science in Information Technology at
                  New Jersey Institute of Technology. As of now, I am
                  currently seeking an internship position where I can apply
                  my skills.
                </p>
                <br />
                <p>
                  Apart from my technical skills, I take pride in my leadership abilities,
                  demonstrated through my involvement in my fraternity, Phi Sigma Kappa.
                </p>
                <br />
                <p>Here are a few of the technologies I&apos;ve been using recently</p>
                <ul name="skill-list" className="skill-list">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Flask</li>
                  <li>Docker</li>
                  <li>SQL</li>
                  <li>Playwright</li>
                </ul>
                <SpotifyViewer />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-end">
            <Image className="w-3/4 h-auto m-auto rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1" src="/images/myself.png" alt="Picture of myself" width='500' height='500'></Image>
          </div>
        </div>
        <button onClick={handleArrow2Click}><i aria-label='Down Arrow Button' className={`${animations.bob} fa-solid fa-angle-down fa-xl text-purple-400 m-auto mt-10`}></i></button>

      </section>

      <section ref={featRef} name="features" className="flex min-h-screen flex-col px-16 md:px-48 content-center justify-center items-center">
        <Sectionheader title={'Featured Projects'} />
        <div name='project-showcase' className='w-full m-5 grid grid-cols-2 gap-10'>

        </div>
      </section>
    </>
  );
}
