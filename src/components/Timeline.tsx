import React from "react";
import Typed from "typed.js";

const Timeline = () => {
  React.useEffect(() => {
    let txt = ["Contact me and let's talk about it!"];

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
      <span className="timeline__top-shadow"></span>
      <span className="timeline__bot-shadow"></span>

      <div className="timeline__item">
        <div className="timeline__content">
          <div className="timeline__year">1998</div>
          <div className="timeline__title">I'm born</div>
          <p>Pretty much when it all started</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="timeline__content">
          <div className="timeline__year">2014</div>
          <div className="timeline__title">High School at Fameck</div>
          <p>Baccalauréat Scientifique (High School diploma, scientific option)</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="timeline__content">
          <div className="timeline__year">2017</div>
          <div className="timeline__title">DUT (BTEC Higher National Diploma)</div>
          <p>University Institute of Technology at Metz</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="timeline__content">
          <div className="timeline__year">04 / 2019 - 06 / 2019</div>
          <div className="timeline__title">Internship at 3d2lux</div>
          <p>Web development WordPress, JavaScript & PHP</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="timeline__content">
          <div className="timeline__year">Now</div>
          <div className="timeline__title">
            <span className="companyTxt">Your company?</span>
            <span className="companyTxt"> An interesting project?</span>
          </div>
          <div className="timeline__type">
            <span className="timeline-txt"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
