import React from "react";
import PropTypes from "prop-types";
import ScaleOnHover from "./ScaleOnHover";

const Project = (props) => {
  return (
    <div className="my-2 hide">
      <div className="flex gap-4">
        <ScaleOnHover>
          <a href={props.link} target="_blank">
            <h4 className="text-2xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-t from-purple-900 via-red-500 to-yellow-500 font-semibold">
              {props.name}
            </h4>
          </a>
        </ScaleOnHover>
        <p className="self-end">{props.year}</p>
      </div>
      <p className="text-gray-200">{props.desc}</p>
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
