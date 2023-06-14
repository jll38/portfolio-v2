import navstyle from "../styles/navbar.module.css";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ScaleOnHover from "./ScaleOnHover";

export default function Navbar() {
  

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    // Check if window object is available
    
    if (typeof window !== "undefined") {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDarkMode ? "dark" : "light";
      setTheme(initialTheme);
    }
    setMounted(true);
  }, [setTheme]);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
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
          <button
          aria-label="dark mode toggle"
            className="w-[30px] border-2 rounded-lg text-white"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <i class="fa-solid fa-moon"></i>
            ) : (
              <i class="fa-solid fa-sun"></i>
            )}
          </button>
        </ScaleOnHover>
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
