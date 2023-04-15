import Image from 'next/image';
import { Inter } from 'next/font/google';
import BGAnim from '@/components/BG-Anim';
import Navbar from '@/components/Navbar';
import SocialBox from '@/components/socialbox';
import animations from '../styles/animations.module.css';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <>
      <main id="main" className="flex min-h-screen flex-col items-center p-6 md:p-24 content-center justify-center">
        <Navbar></Navbar>
        <SocialBox/>
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl text-gray-600 dark:text-gray-300">Hi, I&apos;m</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700">
            <h1 className="text-5xl md:text-8xl font-bold">Julian Lechner</h1>
            <h1 className="text-5xl md:text-8xl font-bold">Web Developer</h1>
          </div>
          <p className="mb-4 text-lg font-normal text-gray-600 dark:text-gray-300">
            Responsive, <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700">Reliable</span>, and Robust Web Development.</p>
        </div>
        <i name='down-arrow' class={`${animations.bob} fa-solid fa-angle-down text-purple-400`}></i>
      </main>

      <section name="about" className="min-h-screen flex-col px-6 md:px-72 content-center justify-center items-center">
        <div className='flex mt-20'>
        <div className="w-3/4">
          <div className="flex flex-wrap">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 divider">01. About Me</h2>
          </div>
          <div>
            <div name="about-text" className="text-lg mt-8">
              <p>
                Hello! My name is <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 font-bold">Julian Lechner</span> and I enjoy building
                web applications.
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
            </div>
          </div>
        </div>
        <div className="w-1/4">
            <img className="object-fill" src="images/myself.png"></img>
          </div>
          </div>
      </section>
    </>
  );
}
