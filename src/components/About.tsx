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

          <ul className="textSlider list">
            <li className="list__item">World!</li>
            <li className="list__item">There!</li>
          </ul>
        </div>

        <div className="about__item">
          <div className="contact">kamilmackow98@gmail.com 07 82 29 80 77</div>
        </div>

        <div className="about__item">
          <p className="desc">Web Developer...</p>
        </div>
      </div>
    </div>
  );
};

export default About;
