import React from "react";
import Link from "next/link";
export function ProjectCard({title, img, link, ghLink}) {
  return <div className="w-[350px] sm:w-[425px]">
            <div class="text-white font-medium break-words p-5">
              <div>
                <div class="truncate">
                  <div class="text-center rounded  truncate">
                    {" "}
                    <Link href={link} class="cursor-pointer" target={"_blank"}>
                      {" "}
                      <img src={img} class="align-middle rounded overflow-clip object-cover h-[250px] w-[425px]" />{" "}
                    </Link>
                  </div>
                  <div class="bg-prussian p-6 rounded">
                    <h3 class="clear-both text-[1.35rem] font-bold mb-1   truncate">
                      {title}
                    </h3>
                    <div>
                      {" "}
                      <span class="text-[0.94rem] text-gray-200 hover:underline">
                        <a href={ghLink} class="cursor-pointer">
                          Repository
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
}
  