import navstyle from "../styles/navbar.module.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ScaleOnHover from "./ScaleOnHover";

export default function Navbar() {
  return (
    <>
      <div
        id="transition"
        className="fixed h-screen w-[0px] bg-aero z-50 duration-300 hidden"
      ></div>
      <div
        className={`${navstyle.container} flex flex-row flex-wrap justify-between`}
      >
        <ScaleOnHover>
          <Link
            href="/"
            className="text-xl uppercase font-bold text-white tracking-tighter"
          >
            Julian Lechner
          </Link>
        </ScaleOnHover>
        <div className="flex gap-5">
          <ScaleOnHover>
            <button
              onClick={() => {
                document
                  .getElementById("transition")
                  .classList.remove("hidden");
                setTimeout(() => {
                  document
                    .getElementById("transition")
                    .classList.replace("w-[0px]", "w-screen");
                }, 100);
                setTimeout(() => {
                  window.location.assign("/blog");
                }, 1000);
              }}
              className="text-xl font-bold "
            >
              Blog
            </button>
          </ScaleOnHover>
        </div>
      </div>
    </>
  );
}
