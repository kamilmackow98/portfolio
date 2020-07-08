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
    let projTxts = document.querySelectorAll(".projects__bgText") as NodeListOf<HTMLElement>;
    let cards = document.querySelectorAll(".card-container") as NodeListOf<HTMLElement>;
    let flkty = flickity.current as Flickity;
    let prevIndex: number = 0;

    flkty = new Flickity("#projectsContainer", {
      percentPosition: true,
      dragThreshold: 25,
      pageDots: false,
    });

    flkty.on("cellSelect", function () {
      cards.forEach((card, i) => {
        if (i !== flkty.selectedIndex) {
          card.classList.remove("isFlipped");
        }

        if (flkty.selectedIndex !== prevIndex) {
          projTxts.forEach((txt) => {
            txt.classList.remove("isGlowing");
          });

          prevIndex = flkty.selectedIndex;
        }
      });
    });

    for (let i = 0; i < cards.length; i++) {
      // two buttons in each card
      let buttons = cards[i].querySelectorAll(".card-button");

      // for buttons in each card element add event listener and toggle class
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener("click", (e) => {
          if (i === flkty.selectedIndex) {
            e.preventDefault();

            projTxts.forEach((txt) => {
              txt.classList.toggle("isGlowing");
            });

            cards[i].classList.toggle("isFlipped");
          }
        });
      }
    }
  }, [flickity]);

  const contactMe = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

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
                  <div className="projects__desc">{project.description}</div>
                  {project.code ? (
                    <a className="projects__code" href={`${project.code}`} target="_blank" rel="noopener noreferrer">
                      <span className="span-label">Code</span>
                      <i className="fas fa-code"></i>
                    </a>
                  ) : (
                    <a
                      className="projects__code"
                      href="#0"
                      onClick={(e) => {
                        contactMe(e);
                      }}
                    >
                      <span className="span-label">Contact me for code</span>
                      <i className="fas fa-code"></i>
                    </a>
                  )}
                  {project.link ? (
                    <a className="projects__link" href={`${project.link}`} target="_blank" rel="noopener noreferrer">
                      <span className="span-label">Preview</span>
                      <i className="fas fa-search"></i>
                    </a>
                  ) : (
                    <a
                      className="projects__link"
                      href="#0"
                      onClick={(e) => {
                        contactMe(e);
                      }}
                    >
                      <span className="span-label">Contact me for preview</span>
                      <i className="fas fa-search"></i>
                    </a>
                  )}

                  <div className="projects__title">{project.title}</div>

                  <div className="projects__tech">{project.progLang.join(" ・ ")}</div>

                  <button className="card-button">
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
                  <div className="projects__title">{project.title}</div>
                  <div className="projects__desc">{project.description}</div>
                  {project.code ? (
                    <a className="projects__code" href={`${project.code}`} target="_blank" rel="noopener noreferrer">
                      <span className="span-label">Code</span>
                      <i className="fas fa-code"></i>
                    </a>
                  ) : (
                    <a
                      className="projects__code"
                      href="#0"
                      onClick={(e) => {
                        contactMe(e);
                      }}
                    >
                      <span className="span-label">Contact me for code</span>
                      <i className="fas fa-code"></i>
                    </a>
                  )}
                  {project.link ? (
                    <a className="projects__link" href={`${project.link}`} target="_blank" rel="noopener noreferrer">
                      <span className="span-label">Preview</span>
                      <i className="fas fa-search"></i>
                    </a>
                  ) : (
                    <a
                      className="projects__link"
                      href="#0"
                      onClick={(e) => {
                        contactMe(e);
                      }}
                    >
                      <span className="span-label">Contact me for preview</span>
                      <i className="fas fa-search"></i>
                    </a>
                  )}

                  <button className="card-button">
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
