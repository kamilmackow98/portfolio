import { ProjectsCollection } from "../App";
import "flickity/dist/flickity.min.css";
import Flickity from "flickity";
import React from "react";

export interface ProjectsProps {
  title: string;
  progLang: string[];
  description: string;
  link?: string;
  code?: string;
}

const Projects = () => {
  // for each object in ProjectsCollection - return a component (div)
  // join() separates array element with " - "

  // ref for flickity so it can be used in useEffect hook
  let flickity = React.useRef() as React.MutableRefObject<React.ReactNode>;

  // after component mount add Flickity on id projectsContainer
  React.useEffect(() => {
    flickity.current = new Flickity("#projectsContainer", {
      percentPosition: true,
      dragThreshold: 25,
      pageDots: false,
    });

    let projectsItem = document.getElementsByClassName("projects__item");
    let cards = document.getElementsByClassName("card-container");

    // custom event listener for changes in DOM
    const mutationObserver = new MutationObserver(function (mutationsList: any, observer: any) {
      // for each mutation
      for (let mutation of mutationsList) {
        // here there are always two mutations because
        // JS removes "is-selected" and adds it to another element

        // here if mutation element doesn't have "is-selected" class
        // checks if first child have "isFlipped" class and if does, removes it
        if (!mutation.target.classList.contains("is-selected")) {
          if (mutation.target.firstElementChild.classList.contains("isFlipped")) {
            mutation.target.firstElementChild.classList.remove("isFlipped");
          }
        }
      }
    });

    // for each element observe if changes in attributes like classes, id or aria-labels etc.
    for (let i = 0; i < projectsItem.length; i++) {
      mutationObserver.observe(projectsItem[i], { attributes: true, attributeFilter: ["aria-hidden"] });
    }

    for (let i = 0; i < cards.length; i++) {
      // two buttons in each card
      let buttons = cards[i].getElementsByClassName("card-button");

      // for buttons in each card element add event listener and toggle class
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener("click", (e) => {
          e.preventDefault();
          cards[i].classList.toggle("isFlipped");
        });
      }
    }
  }, [flickity]);

  const contactMe = () => {
    const contactSection = document.getElementsByClassName("contact__section")[0] as HTMLElement;
    const bottom = contactSection.getBoundingClientRect().bottom + window.scrollY;
    const phone = document.querySelector('.contact__section li[data-link="phone"] a') as HTMLElement;

    window.scroll({ top: bottom, behavior: "smooth" });

    setTimeout(() => {
      phone.focus();
    }, 500);
  };

  return (
    <>
      <div className="projects__bgText txt1">
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
      </div>

      <div className="projects__bgText txt2">
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>k</span>
      </div>

      <div id="projectsContainer">
        {ProjectsCollection.map((project, i) => (
          <div className="projects__item" key={i}>
            <div className="card-container">
              {/* front side of the card*/}
              <div className="card card__front">
                <div className="projects__content face">
                  <div className="projects__title">{project.title}</div>

                  <div className="projects__tech">
                    <div>Technology used</div>
                    {project.progLang.join(" - ")}
                  </div>

                  <button tabIndex={0} className="card-button">
                    Read More
                    <span className="btn-span btn-span1"></span>
                    <span className="btn-span btn-span2"></span>
                    <span className="btn-span btn-span3"></span>
                    <span className="btn-span btn-span4"></span>
                  </button>
                </div>
              </div>

              {/* back side of the card */}
              <div className="card card__back">
                <div className="projects__content back">
                  <div className="projects__wrap">
                    <div>About</div>
                    <hr />
                    <div className="projects__desc">{project.description}</div>
                    <hr />
                    {project.link ? (
                      <a className="projects__link" href={`${project.link}`} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-search"></i>
                      </a>
                    ) : (
                      <div className="projects__link">
                        <i className="fas fa-search"></i>
                      </div>
                    )}
                    {project.code ? (
                      <a className="projects__code" href={`${project.code}`} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-code"></i>
                      </a>
                    ) : (
                      <button className="projects__code" onClick={contactMe}>
                        <i className="fas fa-code"></i>
                      </button>
                    )}
                  </div>

                  <button tabIndex={0} className="card-button">
                    Go Back
                    <span className="btn-span btn-span1"></span>
                    <span className="btn-span btn-span2"></span>
                    <span className="btn-span btn-span3"></span>
                    <span className="btn-span btn-span4"></span>
                  </button>
                </div>
                <span className="anim-span anim-span1"></span>
                <span className="anim-span anim-span2"></span>
                <span className="anim-span anim-span3"></span>
                <span className="anim-span anim-span4"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
