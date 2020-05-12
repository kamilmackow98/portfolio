import linkedinIcon from "../images/icons/linkedin.svg";
import facebookIcon from "../images/icons/facebook.svg";
import githubIcon from "../images/icons/github.svg";
import gmailIcon from "../images/icons/gmail.svg";
import React from "react";

const More = () => {
  return (
    <div className="more__container">
        <ul>
          <li>
            <a href="https://wwww.facebook.com/kamil.mackow2">
              <img src={facebookIcon} alt="social media icon"></img> <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kamil-ma%C4%87k%C3%B3w/">
              <img src={linkedinIcon} alt="social media icon"></img> <span>LinkedIN</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/kamilmackow98">
              <img src={githubIcon} alt="social media icon"></img> <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="mailto:kamilmackow98@gmail.com">
              <img src={gmailIcon} alt="social media icon"></img> <span>Gmail</span>
            </a>
          </li>
        </ul>
    </div>
  );
};

export default More;
