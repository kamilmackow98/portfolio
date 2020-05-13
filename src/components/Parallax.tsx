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
    function parallax(this: Window) {
      let layers = document.getElementsByClassName("layer"); // select all the layers and store them into "layers"
      let top = this.pageYOffset; // store the value of pixels that the document has already been scrolled vertically
      let layer, depth: any, yPos;

      // loop for each layer
      for (let i = 0; i < layers.length; i++) {
        layer = layers[i];
        depth = layer.getAttribute("data-depth");
        yPos = -(top * depth);
        layer.setAttribute("style", `transform: translateY(${yPos}px)`);
      }
    }

    window.addEventListener("scroll", parallax, false);

    return () => {
      window.removeEventListener("scroll", parallax, false);
    };
  }, []);

  return (
    // 0 0.10 0.20 0.40. 0.60 1.00
    // last 0 0.10 0.25 0.40 0.60 0.90
    <div id="parallax__container">
      <div className="layer" data-depth="-0.10" id="layer-0">
        <span></span>
      </div>

      <div className="layer" data-depth="0.40" id="layer-1">
        <span className="typewriter"></span>
      </div>
      {/* <div className="layer" data-depth="0.10" id="layer-1"></div>
      <div className="layer" data-depth="0.25" id="layer-2"></div>
      <div className="layer" data-depth="0.40" id="layer-3"></div>
      <div className="layer" data-depth="0.60" id="layer-4"></div>
      <div className="layer" data-depth="0.90" id="layer-5"></div>
      <div className="layer" data-depth="-0.3" id="layer-6"></div> */}
    </div>
  );
};

export default Parallax;
