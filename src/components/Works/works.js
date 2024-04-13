import React from "react";
import "./works.css";
import p1 from "../../assets/portfolio-1.png";
import p2 from "../../assets/portfolio-2.png";
import p3 from "../../assets/portfolio-3.png";
import p4 from "../../assets/portfolio-4.png";
import p5 from "../../assets/portfolio-5.png";
import p6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am awaited to bring my skills and
        experience to help businesses achieve their goals and creat a strong
        onine presence.
      </span>
      <div className="worksImgs">
        <img src={p1} alt="p" className="worksImg" />
        <img src={p2} alt="p" className="worksImg" />
        <img src={p3} alt="p" className="worksImg" />
        <img src={p4} alt="p" className="worksImg" />
        <img src={p5} alt="p" className="worksImg" />
        <img src={p6} alt="p" className="worksImg" />
      </div>
    </section>
  );
};

export default Works;
