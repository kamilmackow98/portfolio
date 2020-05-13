import React from "react";

const More = () => {
  return (
    <div className="more__container">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1-rEkMi2q9IQwH7YPKPTFBQDsYUZkQGkS/view?usp=sharing"
          >
            <i className="fas fa-file-pdf"></i>
          </a>
        </li>

        <li>
          <a href="tel:+33 7 82 29 80 77">
            <i className="fas fa-mobile-alt"></i>
          </a>
        </li>

        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://wwww.facebook.com/kamil.mackow2">
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>

        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kamil-ma%C4%87k%C3%B3w/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kamilmackow98">
            <i className="fab fa-github"></i>
          </a>
        </li>

        <li>
          <a href="mailto:kamilmackow98@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default More;
