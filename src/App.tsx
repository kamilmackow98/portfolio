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
    progLang: ["SCSS", "ReactJS", "TypeScript", "JS MediaTags", "Happi API"],
    link: "https://kamilmackow98.github.io/player/",
    code: "https://github.com/kamilmackow98/player/tree/master",
    // img: Preview,
  },
  {
    title: "EcoLogTrans",
    description:
      "Small brochure website for my cousin's transport company EcoLogTrans, with some basic features like Google Maps, contact form or an option to choose between two languages that are dynamically displayed on the website but are still rendered on the server side.",
    progLang: ["JavaScript", "PHP", "PHPMailer", "SCSS"],
    link: "https://www.ecologtrans.pl",
  },
  {
    title: "CCV Web APP",
    description:
      "A web app that allows customers and sellers of CCV store to take a photo or to record a short video of themselves. User can send a photo or a video by email or share it on social media like Facebook, Instagram or YouTube. Each video is converted thanks to the FFmpeg library to meet the standards of selected social media and is eventually published online.",
    progLang: ["JavaScript", "PHP", "PHPMailer", "Facebook API", "Instagram API", "XAMPP", "FFmpeg"],
  },
  {
    title: "WordPress plugin",
    description:
      "Modification of an existing WordPress plugin called AmeliaBooking. Main goal was to provide an option to book an appointment for any given product chosen by the user. My part was to add some features to the plugin, improve confirmation message sent to the user and redesign the look on the page but also to link it to the WooCommerce plugin and products available on the website.",
    progLang: ["JavaScript", "PHP", "WordPress"],
    link: "https://www.ifonassist.com/prise-de-rendez-vous-reparation-ifonassist/",
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
