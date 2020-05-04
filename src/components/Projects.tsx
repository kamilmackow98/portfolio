import { ProjectsCollection } from "../App";
import "flickity/dist/flickity.min.css";
import Flickity from "flickity";
import React from "react";

const Projects = () => {
  /* 
    for each object in ProjectsCollection - return a component (div)
    join() separates array elements with ", "
    split() converts the string into an array
    each element will be separated by " ," 
    */

  // ref for flickity so it can be used in useEffect hook
  let flickity = React.useRef() as React.MutableRefObject<React.ReactNode>;

  // after component mount add Flickity on id projectsContainer
  React.useEffect(() => {
    flickity.current = new Flickity("#projectsContainer", {
      percentPosition: true,
      dragThreshold: 25,
      // contain: true
    });

    let projectsItem = document.getElementsByClassName("projects__item");
    let cards = document.getElementsByClassName("cardContainer");

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

    // for each card
    for (let i = 0; i < cards.length; i++) {
      // two buttons in each card
      let buttons = cards[i].getElementsByClassName("cardButton");

      // for buttons in each card element add event listener and toggle class
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener("click", (e) => {
          e.preventDefault();
          cards[i].classList.toggle("isFlipped");
        });
      }
    }
  }, [flickity]);

  return (
    <>
      {ProjectsCollection.map((project, i) => (
        
        <div className="projects__item" key={i}>
          <div className="cardContainer">
            {/* front side of the card*/}
            <div className="card cardFront">
              <div className="projectsContent face">
                <div className="projectsTitle">{project.title}</div>

                <div className="techUsed">
                  <div>- Technology used -</div>
                  {project.progLang.join(", ").split(" ,")}
                </div>

                <div className="cardButton frontButton">
                  Read More
                  <span className="btnSpan btnSpan1"></span>
                  <span className="btnSpan btnSpan2"></span>
                  <span className="btnSpan btnSpan3"></span>
                  <span className="btnSpan btnSpan4"></span>
                </div>

                <div className="projectsDate">{project.date}</div>
              </div>

              <span className="skewedBorder"></span>

              <span className="borderSpan span1"></span>
              <span className="borderSpan span2"></span>
              <span className="borderSpan span3"></span>

              <span className="edge edge1"></span>
              <span className="edge edge2"></span>
              <span className="edge edge3"></span>
              <span className="edge edge4"></span>

              <span className="animSpan animSpan1"></span>
              <span className="animSpan animSpan2"></span>
              <span className="animSpan animSpan3"></span>
              <span className="animSpan animSpan4"></span>
            </div>

            {/* back side of the card */}
            <div className="card cardBack">
              <div className="projectsContent back">
                <div className="description">
                  <div>- About -</div>
                  {project.description}
                </div>

                <div className="cardButton backButton">
                  Go Back
                  <span className="btnSpan btnSpan1"></span>
                  <span className="btnSpan btnSpan2"></span>
                  <span className="btnSpan btnSpan3"></span>
                  <span className="btnSpan btnSpan4"></span>
                </div>

                <div className="projectsDate">{project.date}</div>
              </div>

              <span className="skewedBorder"></span>

              <span className="borderSpan span1"></span>
              <span className="borderSpan span2"></span>
              <span className="borderSpan span3"></span>

              <span className="edge edge1"></span>
              <span className="edge edge2"></span>
              <span className="edge edge3"></span>
              <span className="edge edge4"></span>

              <span className="animSpan animSpan1"></span>
              <span className="animSpan animSpan2"></span>
              <span className="animSpan animSpan3"></span>
              <span className="animSpan animSpan4"></span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export interface ProjectsProps {
  title: string;
  progLang: string[];
  description: string;
  date: string;
}

export default Projects;
