import React from "react";

export interface SkillsProps {
  great: string[];
  good: string[];
  ok: string[];
}

const Skills = (props: SkillsProps) => {
  // returns each skill as a <li> in 3 <ul> elements

  const great = props.great.map((skill, i) => (
    <li key={i} className="toolsLi">
      {skill}
    </li>
  ));

  const good = props.good.map((skill, i) => (
    <li key={i} className="softwaresLi">
      {skill}
    </li>
  ));

  const ok = props.ok.map((skill, i) => (
    <li key={i} className="skillsLi">
      {skill}
    </li>
  ));

  // display each skill, software, tool as a list item in ul element
  return (
    <div className="skills__container">
      <div className="bgText">
        <span>S</span>
        <span>k</span>
        <span>i</span>
        <span>l</span>
        <span>l</span>
        <span>s</span>
      </div>
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

export default Skills;
