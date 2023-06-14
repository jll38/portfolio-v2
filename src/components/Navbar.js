import navstyle from "../styles/navbar.module.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ScaleOnHover from "./ScaleOnHover";

export default function Navbar() {
  
  return (
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
          <Link
            href="/blog"
            className="text-xl font-bold "
          >
            Blog
          </Link>
        </ScaleOnHover>
      </div>
    </div>
  );
}
