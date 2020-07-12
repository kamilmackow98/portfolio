import React from "react";
import Typed from "typed.js";

const Home = () => {
  React.useEffect(() => {
    let birthdate = new Date("1998/09/18"); // birthdate in YYYY/MM/DD format
    let current = new Date();
    let difference = current.getTime() - birthdate.getTime(); // This is the difference in milliseconds
    let age = Math.floor(difference / 31557600000); // Divide by 1000*60*60*24*365.25

    let txt = [
      `var person = {^400\n^250 \`   \`^250name: <span class='home__name'>'Kamil'</span>,^400\n^250 \`   \`^250age: <span class='home__age'>'${age}'</span>,^400\n^250 \`   \`^250location: <span class='home__location'>'Talange'</span>,^400\n^250 \`   \`^250properties: [<span class='home__prop'>'JavaScript'</span>,^400\n^250 \`                \`<span class='home__prop'>^250'ReactJS'</span>,^400\n^250 \`                \`<span class='home__prop'>^250'HTML / SCSS'</span>];^400\n^250};`,
    ];

    let options = {
      strings: txt,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 200,
      smartBackspace: true,
      loop: false,
    };

    new Typed(".typewriter", options);
  }, []);

  const handleClick = () => {
    const work = document.getElementById("projects__container") as HTMLElement;

    let topDist = work.getBoundingClientRect().top; // distance between top of the element and top of the window
    const halfHeight = work.getBoundingClientRect().height / 2; // half of the element's height to get the middle
    const docDist = window.pageYOffset; // distance between user's current position on DOC and the top of the DO

    const elementMiddle = topDist + halfHeight + docDist; // position of the middle of the element on the DOC
    const middle = elementMiddle - window.innerHeight / 2; // centers the window on the element

    window.scrollTo(0, middle);
  };

  return (
    <div id="home__container">
      <div className="home__paper"></div>

      <div className="home__typed">
        <span className="typewriter"></span>
      </div>

      <div className="home__button">
        <button className="home-btn" onClick={handleClick}>
          My Work
        </button>
      </div>
    </div>
  );
};

export default Home;
