import React from "react";

const Skills = (props: SkillsProps) => {
  // component that returns skills, softwares and tools

  // for each tool display as a list item
  const great = props.great.map((skill, i) => (
    <li key={i} className="toolsLi">
      {skill}
    </li>
  ));

  // for each software display as a list item
  const good = props.good.map((skill, i) => (
    <li key={i} className="softwaresLi">
      {skill}
    </li>
  ));

  // for each skill display as a list item
  const ok = props.ok.map((skill, i) => (
    <li key={i} className="skillsLi">
      {skill}
    </li>
  ));

  // display each skill, software, tool as a list item in ul element
  return (
    <div className="skills__container">
      <div className="skills__item">
        <div className="skills__content">
          <h3>Great</h3>
          <ul>{great}</ul>
          <span className="shadow"></span>
        </div>
      </div>

      <div className="skills__item">
        <div className="skills__content">
          <h3>Good</h3>
          <ul>{good}</ul>
          <span className="shadow"></span>
        </div>
      </div>

      <div className="skills__item">
        <div className="skills__content">
          <h3>Ok</h3>
          <ul>{ok}</ul>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
};

export interface SkillsProps {
  great: string[];
  good: string[];
  ok: string[];
}

export default Skills;
