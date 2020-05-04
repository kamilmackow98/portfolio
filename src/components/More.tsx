import linkedinIcon from "../images/icons/linkedin.svg";
import facebookIcon from "../images/icons/facebook.svg";
import githubIcon from "../images/icons/github.svg";
import gmailIcon from "../images/icons/gmail.svg";
import React from "react";

const More = () => {
    // component that returns more info, hobbies, interests etc.

    return (
        <div className="moreContainer">
            <div className="moreGridItem">
                <div className="moreContent">
                    <div className="moreCircle">
                        <span className="moreText">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem harum odit ea quae aliquam
                            repellat corporis deserunt ipsa modi qui necessitatibus iusto, quos maiores nobis tempora
                            eius sequi pariatur sint?
                        </span>{" "}
                        {/* Music */}
                    </div>
                </div>
                <div className="moreContent">
                    <div className="moreCircle">
                        <span className="moreText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deleniti earum
                            temporibus harum ad? Aliquid, assumenda necessitatibus numquam reprehenderit accusamus
                            ducimus unde architecto quidem et cum minus quam delectus. Cum.
                        </span>{" "}
                        {/* Cinematography */}
                    </div>
                </div>
                <div className="moreContent">
                    <div className="moreCircle">
                        <span className="moreText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at laboriosam ab magni ipsam
                            quasi voluptates consectetur libero. Molestiae quae tempore voluptatibus error explicabo,
                            enim necessitatibus distinctio itaque nobis corrupti.
                        </span>{" "}
                        {/* Web Design */}
                    </div>
                </div>
            </div>

            <div className="moreGridItem">
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
        </div>
    );
};

export default More;
