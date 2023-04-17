import React from "react";
import Image from "next/image";
import ScaleOnHover from "./ScaleOnHover";

export default function FeaturedBox({ src, alt, text }) {
  return (
    <ScaleOnHover>
        <div className="h-52 w-96">
        <Image src={src} width='1000' height='1000' alt={alt} className='object-cover h-full w-full opacity-50 rounded-lg' />
        </div>
    </ScaleOnHover>
  );
}

