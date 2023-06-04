import React from "react";
export function SkillCard({ ...props }) {
  return (
    <div
      name="cardContainer"
      className="flex-col w-[300px] rounded-md overflow-hidden"
    >
      <div
        name="cardHeader"
        className="text-center align-middle p-2 bg-gradient-to-b from-orange-400 to-blue-500 dark:from-red-700 dark:to-purple-700 pt-5 pb-5 text-white"
        style={{textShadow: "1px 1px 2px rgba(0,0,0, 0.7)"}}
      >
        <i
          className={props.logo + " fa-2xl text-white mb-4"}
          alt="HTML5 Logo"
        ></i>
        <p className="font-bold">{props.title}</p>
      </div>
      <div name="cardbody"
      className="text-center align-middle p-2 bg-gradient-to-b from-blue-500 dark:from-purple-700 pb-20 text-white"
      style={{textShadow: "1px 1px 2px rgba(0,0,0, 0.4)"}}>
        <ul>
          {props.skills.map((skill, i) => {
            if (skill) {
              console.log(skill);
              return <li key={i}>{skill}</li>;
            } else{
              console.log("Empty Skill String");
              return <li key={i}><br/></li>
            }
          })}
        </ul>
      </div>
    </div>
  );
}
