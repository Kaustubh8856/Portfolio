import React from "react";
import "./skills.css";
import UI from "../../assets/ui-design.png";
import Web from "../../assets/website-design.png";
import App from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled web designer with experience in creating visually
        appealing and user friendly websites. I have a strong understanding of
        design and a keen eye for details. I am proficient in HTML, CSS,
        Javascript and React as well as design software such as Adobe Photoshop
        and Illustrator.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={UI} alt="ui" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={Web} alt="web" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={App} alt="app" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
