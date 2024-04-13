import React from "react";
import "./contact.css";
import w from "../../assets/walmart.png";
import a from "../../assets/adobe.png";
import m from "../../assets/microsoft.png";
import f from "../../assets/facebook.png";
import fi from "../../assets/facebook-icon.png";
import ti from "../../assets/twitter.png";
import yi from "../../assets/youtube.png";
import ii from "../../assets/instagram.png";

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={w} alt="" className="clientImg" />
          <img src={a} alt="" className="clientImg" />
          <img src={m} alt="" className="clientImg" />
          <img src={f} alt="" className="clientImg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form className="contactForm">
          <input type="text" placeholder="Your Name" className="name" />
          <input type="email" placeholder="Your Email" className="email" />
          <textarea
            name="messgae"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={fi} alt="f" className="link" />
            <img src={ti} alt="t" className="link" />
            <img src={yi} alt="y" className="link" />
            <img src={ii} alt="i" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
