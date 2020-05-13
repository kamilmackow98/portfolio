import React from "react";
import Typed from "typed.js";

const Parallax = () => {
  React.useEffect(() => {
    let birthdate = new Date("1998/09/18"); // birthdate in YYYY/MM/DD format
    let current = new Date();
    let difference = current.getTime() - birthdate.getTime(); // This is the difference in milliseconds
    let age = Math.floor(difference / 31557600000); // Divide by 1000*60*60*24*365.25

    let txt = [
      `var person = {^400\n^250 \`   \`^250name: <span class='name'>'Kamil'</span>,^400\n^250 \`   \`^250age: <span class='age'>'${age}'</span>,^400\n^250 \`   \`^250location: <span class='location'>'Talange'</span>,^400\n^250 \`   \`^250properties: [<span class='prop'>'JavaScript'</span>,^400\n^250 \`                \`<span class='prop'>^250'ReactJS'</span>,^400\n^250 \`                \`<span class='prop'>^250'HTML / SCSS'</span>];^400\n^250};`,
    ];

    let options = {
      strings: txt,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 200,
      smartBackspace: true,
    };

    new Typed(".typewriter", options);

    // parallax magic
    function parallax() {
      let top = window.pageYOffset; // store the value of pixels that the document has already been scrolled vertically

      let layers = document.getElementsByClassName("layer"); // select all the layers and store them into "layers"
      let layer, depth: any, yPos;

      // loop for each layer
      for (let i = 0; i < layers.length; i++) {
        layer = layers[i];
        depth = layer.getAttribute("data-depth");
        yPos = -((top * depth) / 100);
        layer.setAttribute("style", `transform: translate3d(0, ${yPos}px, 0)`);
      }
    }

    window.addEventListener("scroll", parallax, false);

    return () => {
      window.removeEventListener("scroll", parallax, false);
    };
  }, []);

  const handleClick = () => {
    const work = document.getElementById("projectsContainer") as HTMLElement;
    const top = work.getBoundingClientRect().top + window.scrollY;

    window.scroll({ top: top, behavior: "smooth" });
  };

  return (
    // 0 0.10 0.20 0.40. 0.60 1.00
    // last 0 0.10 0.25 0.40 0.60 0.90
    <div id="parallax__container">
      <div className="layer" data-depth="-50" id="layer-0"></div>

      <div className="layer" data-depth="20" id="layer-1">
        <span className="typewriter"></span>
      </div>

      <div className="layer" data-depth="20" id="layer-2">
        <button className="parallax-btn" onClick={handleClick}>
          My Work
        </button>
      </div>
    </div>
  );
};

export default Parallax;
