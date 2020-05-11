import React from "react";

const About = () => {
  // component that returns personal informations

  return (
    <div className="about__container">
      <div className="bgText">
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
      </div>

      <div className="about__content">
        <div className="about__item slideshow">
          <p className="title">Hello</p>

          <ul className="list">
            <li>User!</li>
            <li>Traveler!</li>
            <li>There!</li>
            <li>World!</li>
            <li>User!</li>
          </ul>
        </div>

        <div className="about__item interests">
          <p className="like">I like</p>

          <ul className="list">
            <li>web design</li>
            <li>playing guitar</li>
            <li>music</li>
            <li>progamming</li>
            <li>web design</li>
          </ul>
        </div>

        <div className="about__item typewriter">
          <div className="container">
            I am
            <span
              className="text-type"
              data-wait="3000"
              data-words='["JS Developer", "ReactJS developer", "Web designer"]'
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
