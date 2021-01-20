import Projects, { ProjectsProps } from "./components/Projects";
import Skills, { SkillsProps } from "./components/Skills";
import Home from "./components/Home";
import React from "react";
import About from "./components/About";
import More from "./components/More";

import "./sass/App.scss";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <div className="app">
      {/* <NavBar /> */}

      <Home />
      <div className="content__wrap">
        <section>
          <About />
        </section>

        <section>
          <Timeline />
        </section>

        <section>
          <Skills great={SkillsCollection.great} good={SkillsCollection.good} ok={SkillsCollection.ok} />
        </section>

        <section id="projects__section">
          <Projects />
        </section>

        <section>
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
      "A music player inspired by CaTRoX theme for Foobar2000. Designed mainly to play several songs from different albums. User can drag, open or add audio files which will then be added to the main playlist. Thanks to JS Media Tags, the album cover for each song can be displayed along with other song information. User can also search for the lyrics of the current song thanks to the Happi API.",
    progLang: ["TypeScript", "SCSS", "ReactJS", "JS MediaTags", "Happi API"],
    link: "https://kamilmackow98.github.io/player",
    code: "https://github.com/kamilmackow98/player/tree/master",
  },
  {
    title: "EcoLogTrans",
    description:
      "Small brochure website for my cousin's transport company EcoLogTrans. The website has some basic features like Google Maps, contact form or an option to choose between two languages that are dynamically displayed on the website but they're still rendered on the server side in order to get the best SEO Ranking possible.",
    progLang: ["JavaScript", "PHP", "SCSS", "PHPMailer"],
    link: "https://www.ecologtrans.pl",
  },
  {
    title: "Algorithms Visualization",
    description:
      "Small side project that aims to visualize sorting algorithms (bubble sort, insertion sort, quick sort, etc.) with randomly generated bars. User can select the number of bars, the lowest and highest value that represents the height of each bar, the speed of the visualization and also the sorting algorithm. So far only the bubble sort algorithm is available - work in progress.",
    progLang: ["TypeScript", "CSS", "ReactJS"],
    link: "https://kamilmackow98.github.io/sort-algo",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A tiny college project. Main goal was to develop a Tic Tac Toe game with TypeScript and with object oriented programming in mind. The game offers the user a choice of the grid size (from 3x3 to 8x8) and 2 different play modes - standard and simple mode (only 3 symbols to win).",
    progLang: ["TypeScript", "CSS"],
    link: "https://kamilmackow98.github.io/tic_tac_toe",
    code: "https://github.com/kamilmackow98/tic_tac_toe",
  },
  {
    title: "WordPress plugin",
    description:
      "Modification of an existing WordPress plugin called AmeliaBooking. Main goal was to provide an option to book an appointment for any given product chosen by the user. My part in the project was to add some features to the plugin, improve confirmation message sent to the user and redesign the look on the page but also to link it to the WooCommerce plugin and products available on the website.",
    progLang: ["JavaScript", "PHP", "WordPress"],
    link: "https://www.ifonassist.com/prise-de-rendez-vous-reparation-ifonassist",
  },
];

// -----------------------------------------
// ------- JSON avec les competences -------
// -----------------------------------------

export let SkillsCollection: SkillsProps = {
  great: ["JavaScript / TypeScript", "CSS3 / SCSS / Less", "HTML5", "jQuery", "ReactJS", "Gimp 2"],
  good: ["Symfony", "Vue.js", "PHP", "MySQL", "XAMPP", "GIT"],
  ok: ["Adobe After Effects", "Adobe Photoshop", "WordPress", "Postman", "REST", "Java"],
};

export default App;
