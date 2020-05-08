import React, { useEffect } from "react";

const Parallax = () => {
    // first we add an event listener on scroll

    useEffect(() => {
        // scroll event listener on entire window
        window.addEventListener(
            "scroll",
            function(event) {
                let layers = document.getElementsByClassName("layer"); // select all the layers and store them into "layers"
                let top = this.pageYOffset; // store the value of pixels that the document has already been scrolled vertically
                let layer, depth: any, yPos;

                // loop for each layer
                for (let i = 0; i < layers.length; i++) {
                    layer = layers[i];
                    depth = layer.getAttribute("data-depth");
                    yPos = -(top * depth);
                    layer.setAttribute("style", "transform: translate3d(0px, " + yPos + "px, 0px)");
                }
            },
            true
        );
    });

    return (
        // 0 0.10 0.20 0.40. 0.60 1.00
        // last 0 0.10 0.25 0.40 0.60 0.90
        <div id="parallaxContainer">
            <div className="layer" data-depth="0.00" id="layer-0">
                <div>
                    <span>First</span>
                </div>
            </div>
            <div className="layer" data-depth="0.10" id="layer-1">
                <div>
                    <span></span>
                </div>
            </div>
            <div className="layer" data-depth="0.25" id="layer-2">
                <div>
                    <span></span>
                </div>
            </div>
            <div className="layer" data-depth="0.40" id="layer-3">
                <div>
                    <span></span>
                </div>
            </div>
            <div className="layer" data-depth="0.60" id="layer-4">
                <div>
                    <span></span>
                </div>
            </div>
            <div className="layer" data-depth="0.90" id="layer-5">
                <div>
                    <span></span>
                </div>
            </div>
            <div className="layer" data-depth="-0.3" id="layer-6">
                <div>
                    <div>
                    <span className="arrowLink"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parallax;
