import React from "react";
import Typed from "typed.js";

const About = () => {
  React.useEffect(() => {
    let txt = [
      "I am a JavaScript developer.",
      "I am a ReactJS developer.",
      "Make sure to check my work!",
      "Nobody expects the Spanish Inquisition!",
    ];

    let options = {
      strings: txt,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 200,
      loop: true,
    };

    new Typed(".about__text-type", options);
  }, []);

  return (
    <div className="about__container">
      <div className="about__bgText">
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
      </div>

      <div className="about__content">
        <div className="about__item slideshow">
          <p className="about__hello-title">Hello</p>

          <ul className="about__list">
            <li>User!</li>
            <li>Traveler!</li>
            <li>There!</li>
            <li>World!</li>
            <li>User!</li>
          </ul>
        </div>

        <div className="about__item interests">
          <p className="about__like">I like</p>

          <ul className="about__list">
            <li>UI design</li>
            <li>playing guitar</li>
            <li>music</li>
            <li>progamming</li>
            <li>UI design</li>
          </ul>
        </div>

        <div className="about__item">
          <div className="about__description">
            <p className="about__desc">I'm a junior web developer, I try to specialize</p>
            <p className="about__desc">mainly in Front End development and JS.</p>
            <p className="about__desc">I'm also learning about web design.</p>
          </div>
        </div>

        <div className="about__item">
          <div className="about__typewriter">
            <span className="about__text-type"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
