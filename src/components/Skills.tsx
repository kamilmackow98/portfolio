import React from "react";

const Skills = (props: SkillsProps) => {
    // component that returns skills, softwares and tools 
    
    // for each tool display as a list item
    const toolsAndOthers = props.toolsAndOthers.map((tool, i) => (
        <li key={i} className="toolsLi">
            <div className="textTool">{tool}</div>
            <div className="meter">
            <div className="shine">
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>                    
                </div>
            </div>
        </li>
    ));

    // for each software display as a list item
    const softwares = props.softwares.map((software, i) => (
        <li key={i} className="softwaresLi">
            <div className="textSoftware">{software}</div>
            <div className="meter">
            <div className="shine">
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>                    
                </div>
            </div>
        </li>
    ));

    // for each skill display as a list item
    const skills = props.skills.map((skill, i) => (
        <li key={i} className="skillsLi">
            <div className="textSkill">{skill}</div>
            <div className="meter">
                <div className="shine">
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>
                    <span className="dashedMeter"></span>                    
                </div>
            </div>
        </li>
    ));

    // display each skill, software, tool as a list item in ul element
    return (
        <div className="skillsContainer">
            <div className="skillsGridItem">
                <div className="skillsContent">
                    <div>
                        <h3>Softwares</h3>
                        <ul>{softwares}</ul>
                    </div>
                    <span className="customShadow"></span>
                    <span className="glowBorder1"></span>
                    <span className="glowBorder2"></span>
                </div>
            </div>

            <div className="skillsGridItem">
                <div className="skillsContent">
                    <div>
                        <h3>
                            Programming Languages
                        </h3>

                        <ul>{skills}</ul>
                    </div>
                    <span className="customShadow"></span>
                    <span className="glowBorder1"></span>
                    <span className="glowBorder2"></span>
                </div>
            </div>

            <div className="skillsGridItem">
                <div className="skillsContent">
                    <div>
                        <h3>Tools & Others</h3>
                        <ul>{toolsAndOthers}</ul>
                    </div>
                    <span className="customShadow"></span>
                    <span className="glowBorder1"></span>
                    <span className="glowBorder2"></span>
                </div>
                
            </div>
        </div>
    );
};

export interface SkillsProps {
    skills: string[];
    softwares: string[];
    toolsAndOthers: string[];
}

export default Skills;
