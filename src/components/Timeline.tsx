import React from "react";

const Timeline = () => {
  return (
    <div className="timeline__container">

      <span className="topShadow"></span>
      <span className="botShadow"></span>
      
      <div className="timeline__item">
        <div className="content">
          <div className="year">1998</div>
          <div className="title">I'm born</div>
          <p>That actually happened</p>
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
          <p>Internship - Web development WordPress, JavaScript & PHP</p>
        </div>
      </div>

      <div className="timeline__item">
        <div className="content">
          <div className="year">Now</div>
          <div className="title">Your company?</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, commodi.</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
