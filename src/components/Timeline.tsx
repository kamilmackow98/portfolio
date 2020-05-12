import React from "react";
import Typed from "typed.js";

const Timeline = () => {
  React.useEffect(() => {
    let txt = ["Let's talk about it!^1000 Give me a chance to contribute to the future of your business!"];

    let options = {
      strings: txt,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 200,
    };

    new Typed(".timeline-txt", options);
  }, []);

  return (
    <div className="timeline__container">
      <span className="topShadow"></span>
      <span className="botShadow"></span>

      <div className="timeline__item">
        <div className="content">
          <div className="year">1998</div>
          <div className="title">I'm born</div>
          <p>Unbelievable but it's true</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="content">
          <div className="year">2014</div>
          <div className="title">High School at Fameck</div>
          <p>Baccalauréat Scientifique (High School diploma, scientific option)</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="content">
          <div className="year">2017</div>
          <div className="title">DUT (BTEC Higher National Diploma)</div>
          <p>University Institute of Technology at Metz</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="content">
          <div className="year">04 / 2019 - 06 / 2019</div>
          <div className="title">Internship at 3d2lux</div>
          <p>Web development WordPress, JavaScript & PHP</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="content">
          <div className="year">Now</div>
          <div className="title">Your company? An interesting project?</div>
          <div className="type"><span className="timeline-txt"></span></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
