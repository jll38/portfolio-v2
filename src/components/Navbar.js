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
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-radial from-blue-600 to-blue-400 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700"
        >
          JL
        </Link>
      </ScaleOnHover>
      <div className="flex gap-5">
        <ScaleOnHover>
          <button
          aria-label="dark mode toggle"
            className="w-[30px] dark:text-pink-500 border-2 rounded-lg text-blue-400 border-blue-400 dark:border-pink-500"
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
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-radial from-blue-600 to-blue-400 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700"
          >
            Blog
          </Link>
        </ScaleOnHover>
      </div>
    </div>
  );
}
