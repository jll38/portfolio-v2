import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ScaleOnHover from "./ScaleOnHover";

export default function FeaturedBox({ src, alt, text, href }) {
  const handleClick = (url) => () => {
    window.open(url, '_blank');
  };
  return (
    <ScaleOnHover>
      <button className="overflow-hidden h-40 w-60 relative rounded-lg pink-overlay" onClick={handleClick(href)}>
        <div className="h-40 overflow-hidden"><Image src={src} alt={alt} fill className="object-fill" /></div>
      </button>
    </ScaleOnHover>
  );
}