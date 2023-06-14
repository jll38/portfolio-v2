import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Navbar from "../components/Navbar";
import SocialBox from "../components/socialbox";
import { useEffect } from "react";
export default function Blog({ allPostsData }) {
  useEffect(() => {
    
    setTimeout(() => {
        document
      .getElementById("fade-out")
      .classList.replace("opacity-100", "opacity-0");
      }, 10);
    
    setTimeout(() => {
      document.getElementById("fade-out").classList.add("hidden");
    }, 500);
  });
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>

      <div
        id="fade-out"
        className="fixed w-screen h-screen bg-aero opacity-100 transition-all duration-500 z-50"
      ></div>
      <div className="flex min-h-screen flex-col px-16 md:px-48 content-center justify-center items-center dark:bg-black">
        <Navbar />
        <SocialBox />
        <section className="flex flex-col">
          <Link href="/" className="text-gray-800 dark:text-white">
            &#8592; Go Home
          </Link>
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-blue-400 dark:from-purple-500 dark:to-red-700 font-bold mb-2 divider">
            Blog
          </h1>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link
                  href={`/blog/${id}`}
                  className="text-xl text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-blue-600 dark:from-purple-500 dark:to-yellow-500 font-bold"
                >
                  {title}
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
