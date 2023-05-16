import React from "react";
export function Sectionheader({title}) {
  return <div className="flex flex-wrap">
              <h2 className="text-3xl xl:text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-radial from-blue-600 to-blue-400 dark:bg-gradient-to-t dark:from-purple-500 dark:to-red-700 divider">{title}</h2>
            </div>;
}
  