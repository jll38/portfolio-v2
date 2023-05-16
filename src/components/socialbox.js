import socialstyle from "../styles/socialbox.module.css";
import ScaleOnHover from "./ScaleOnHover";
import Link from "next/link";
import Head from "next/head";
export default function SocialBox() {
  return (
    <>
      <Head>
        <script
          defer
          src="https://kit.fontawesome.com/a7908c27f8.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className={`${socialstyle.container}`}>
        <ScaleOnHover>
          <a
            href="https://www.linkedin.com/in/julianllechner/"
            target={"_blank"}
            aria-label="LinkedIn Link"
          >
            <i
              className="fab fa-linkedin fa-2xl text-blue-600 dark:text-pink-600 mb-4"
              alt="linkedin logo"
            ></i>
          </a>
        </ScaleOnHover>
        <br />
        <ScaleOnHover>
          <a
            href="https://github.com/jll38"
            target={"_blank"}
            aria-label="Github Link"
          >
            <i
              className="fab fa-github fa-2xl text-blue-600 dark:text-pink-600"
              alt="github logo"
            ></i>
          </a>
        </ScaleOnHover>
        <div className={`dark:${socialstyle.divider}`}></div>
      </div>
    </>
  );
}
