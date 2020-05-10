import Projects, { ProjectsProps } from "./components/Projects";
import Skills, { SkillsProps } from "./components/Skills";
import Parallax from "./components/Parallax";
import React, { useEffect } from "react";
import About from "./components/About";
import More from "./components/More";

import "./sass/App.scss";
import Timeline from "./components/Timeline";

/**
 * TODO : cleanUp every eventListener in useEffect()
 */

const App = () => {
  useEffect(() => {
    // after page refresh will be scrolled to the top
    // window.onbeforeunload = function() {
    //     window.scrollTo(0, 0);
    // };
    /*
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
    } */
    /*
    let sections = document.getElementsByClassName("sectionContainer") as HTMLCollectionOf<HTMLElement>;

    //arrow link to scroll to about section
    let arrowLink = document.getElementsByClassName("arrowLink")[0];

    arrowLink.addEventListener("click", function () {
      let aboutTopPosition = sections[0].offsetTop; // about top position

      window.scrollTo({ top: aboutTopPosition, behavior: "smooth" });
    }); */
  }, []);

  return (
    <div className="app">
      {/* <NavBar /> */}

      {/* <Parallax /> */}
      {/* parallax used to be inside a section with class="sectionContainer" */}
      <div className="contentWrap">
        <section className="sectionContainer">
          <About />
        </section>

        <section>
          <Timeline />
        </section>

        <section>
          {/* <h2>I consider myself...</h2> */}

          <Skills great={SkillsCollection.great} good={SkillsCollection.good} ok={SkillsCollection.ok} />
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
    title: "Music Player",
    description:
      "A music player inspired by CaTRoX theme for Foobar2000. Designed mainly to play several songs from different albums. User can drag, open or add audio files which will then be added to the main playlist. Thanks to JS Media Tags, the album cover for each song can be displayed with other song information. User can also search for the lyrics of the current song thanks to the Happi API.",
    progLang: ["Scss", "ReactJS", "TypeScript", "JS MediaTags", "Happi API"],
    link: "https://kamilmackow98.github.io/player/",
    code: "https://github.com/kamilmackow98/player/tree/master",
    date: "04 - 2020",
  },
  {
    title: "CCV Web APP",
    description:
      "Une application web qui permet de se prendre en photo et s'enregistrer par les vendeurs et les clients de boutiques CCV",
    progLang: ["JavaScript", "PHP", "XAMPP", "FFmpeg"],
    date: "06 - 2019",
  },
  {
    title: "WordPress plugin",
    description: "Modification of WordPress plugin AmeliaBooking for iFonAssist website.",
    progLang: ["JavaScript", "PHP", "WordPress"],
    date: "05 - 2019",
  },
];

// -----------------------------------------
// ------- JSON avec les competences -------
// -----------------------------------------

export let SkillsCollection: SkillsProps = {
  great: ["HTML", "CSS / SCSS", "JavaScript", "TypeScript", "Adobe Photoshop", "Gimp 2"],
  good: ["ReactJS", "jQuery", "PHP", "MySQL", "XAMPP", "WordPress"],
  ok: ["C / C++", "Java", "GIT", "Audacity", "Adobe After Effects", "Vegas Pro"],
};

export default App;
