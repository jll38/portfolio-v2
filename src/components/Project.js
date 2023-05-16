import React from "react";
import PropTypes from "prop-types";
import ScaleOnHover from "./ScaleOnHover";

const Project = (props) => {
  return (
    <div className="my-2 hide">
      <div className="flex gap-4">
        <ScaleOnHover>
          <a href={props.link} target="_blank">
            <h4 className="text-2xl xl:text-4xl dark:text-transparent bg-clip-text bg-gradient-to-t text-blue-400 dark:from-purple-900 dark:via-red-500 dark:to-yellow-500 font-semibold dark:shadow-none drop-shadow-sm">
              {props.name}
            </h4>
          </a>
        </ScaleOnHover>
        <p className="self-end text-gray-700 dark:text-gray-200">{props.year}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-200">{props.desc}</p>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  props: PropTypes.number,
};

export default Project;
