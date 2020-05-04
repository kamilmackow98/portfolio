import Projects, { ProjectsProps } from "./components/Projects";
import Skills, { SkillsProps } from "./components/Skills";
import Parallax from "./components/Parallax";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import More from "./components/More";

import "./sass/App.scss";

/**
 * TODO : cleanUp every eventListener in useEffect()
 */

const App = () => {
  useEffect(() => {
    // after page refresh will be scrolled to the top
    // window.onbeforeunload = function() {
    //     window.scrollTo(0, 0);
    // };

    let navBar = document.getElementsByClassName("navBar") as HTMLCollectionOf<HTMLElement>;
    let currentScrollTop = 0;
    let c: number;

    // hide or show up the nav bar
    window.addEventListener("scroll", function (event) {
      let top = this.pageYOffset; // scroll position
      // let barHeight = navBar[0].offsetHeight; // height of the nav bar

      currentScrollTop = top;

      // used to be c < currentScrollTop && top > barHeight + barHeight
      // and else if (c > currentScrollTop && !(top <= barHeight))
      if (c < currentScrollTop) {
        // on scrolling down
        navBar[0].classList.remove("scrollUp");
        navBar[0].classList.add("scrollDown");
      } else {
        // on scrolling up
        navBar[0].classList.remove("scrollDown");
        navBar[0].classList.add("scrollUp");
      }

      c = currentScrollTop;
    });

    // event listener for each nav link, on click will scroll to its section
    let navLinks = document.getElementsByClassName("navItem");
    let sections = document.getElementsByClassName("sectionContainer") as HTMLCollectionOf<HTMLElement>;

    // for each nav link add click event
    for (let i = 0; i < navLinks.length; i++) {
      let c: number;

      navLinks[i].addEventListener("click", function () {
        let topPos = sections[i].offsetTop; // each section scroll position
        let currentPos = window.pageYOffset;

        if (c < currentPos) {
          window.scrollTo({ top: topPos - 48, behavior: "smooth" });
        } else {
          window.scrollTo({ top: topPos, behavior: "smooth" });
        }

        c = currentPos;

        // other way to do it
        // sections[i].scrollIntoView({
        //     behavior: "smooth",
        //     block: "start",
        //     inline: "nearest"
        // });
      });
    }

    //arrow link to scroll to about section
    let arrowLink = document.getElementsByClassName("arrowLink")[0];

    arrowLink.addEventListener("click", function () {
      let aboutTopPosition = sections[1].offsetTop; // about top position
      window.scrollTo({ top: aboutTopPosition, behavior: "smooth" });
    });
  }, []);

  return (
    <div className="app">
      <NavBar />

      <section className="sectionContainer">
        <Parallax />
      </section>
      <div className="contentWrap">
        <section className="sectionContainer">
          <About
            name={"Kamil Maćków"}
            contactInfo={"kamilmackow98@gmail.com 07 82 29 80 77"}
            description={"Web Developer..."}
          />
        </section>

        <section>
          <Skills
            skills={SkillsCollection.skills}
            softwares={SkillsCollection.softwares}
            toolsAndOthers={SkillsCollection.toolsAndOthers}
          />
        </section>

        <section className="sectionContainer" id="projectsContainer">
          <Projects />
        </section>

        <section className="sectionContainer">
          <More />
        </section>
      </div>
    </div>
  );
};

// -------------------------------------
// ------- JSON avec les projets -------
// -------------------------------------

export let ProjectsCollection: ProjectsProps[] = [
  {
    title: "CCV Web APP",
    description:
      "Une application web qui permet de se prendre en photo et s'enregistrer par les vendeurs et les clients de boutiques CCV",
    progLang: ["JavaScript", "PHP", "XAMPP", "FFmpeg"],
    date: "06 - 2019",
  },
  {
    title: "Management Software",
    description: "Test description",
    progLang: ["Java", "JavaFX", "mySQL", "Git"],
    date: "08 - 2018",
  },
  {
    title: "Music Player",
    description: "Future Project",
    progLang: ["ReactJS", "TypeScript", "Spotify API"],
    date: "04 - 2020",
  },
];

// -----------------------------------------
// ------- JSON avec les competences -------
// -----------------------------------------

export let SkillsCollection: SkillsProps = {
  softwares: ["Gimp 2", "Vegas Pro", "Audacity", "Adobe After Effects", "Adobe Photoshop"],
  skills: ["JavaScript", "PHP", "Java", "C", "MySQL"],
  toolsAndOthers: ["HTML / CSS", "Git", "WordPress", "XAMPP", "ReactJS"],
};

export default App;
