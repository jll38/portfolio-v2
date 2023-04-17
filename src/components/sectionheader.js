import React from "react";
export function Sectionheader({title}) {
  return <div className="flex flex-wrap">
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 divider">{title}</h2>
            </div>;
}
  