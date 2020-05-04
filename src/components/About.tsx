import React from "react";

export interface AboutProps {
    name: string;
    contactInfo: string;
    description: string;
    socialMedia?: string[];
}

const About = (props: AboutProps) => {
    // component that returns personal informations

    return (
        <div className="aboutContainer">
            <div className="aboutGridItem">
                <div className="aboutContent">
                    <h1>{props.name}</h1>
                    <div>{props.contactInfo}</div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default About;
