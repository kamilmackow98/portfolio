import React from "react";
import Typed from "typed.js";

const About = () => {
  React.useEffect(() => {
    let txt = [
      "I am a JavaScript developer.",
      "I am a ReactJS developer.",
      "You should check my work!^1000 (you might like it)",
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

    new Typed(".text-type", options);
  }, []);

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
            <li>UI design</li>
            <li>playing guitar</li>
            <li>music</li>
            <li>progamming</li>
            <li>UI design</li>
          </ul>
        </div>

        <div className="about__item">
          <div className="description">
            <p className="desc">I'm a junior web developer, I try to specialize</p>
            <p className="desc">mainly in Front End development and JS.</p>
            <p className="desc">I'm also learning about web design.</p>
          </div>
        </div>

        <div className="about__item">
          <div className="typewriter">
            <span className="text-type"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
