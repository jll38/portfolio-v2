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
      <div className="min-h-screen bg-[url('/images/pexels-chris-schippers-421927.webp')] bg-cover z-[1]">
        <div className="bg-prussian/75 w-screen h-screen flex flex-col px-16 md:px-48 content-center justify-center items-center">
        <Navbar />
        <section className="flex flex-col">
          <Link href="/" className="text-white font-semibold">
            &#8592; Go Home
          </Link>
          <h1 className="text-4xl font-bold mb-2 divider">
            Blog
          </h1>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link
                  href={`/blog/${id}`}
                  className="text-xl font-medium"
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
