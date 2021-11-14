import React from "react";
import { FaEnvelopeSquare, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export const  Contact = () => {
      return (
        <div>
            <section id="contact">
              <h2>Contact</h2>
              <div>
                <a href="mailto:hardy.rafael17@gmail.com" ><FaEnvelopeSquare className="fab icon"/></a>
                <a href="https://www.linkedin.com/in/jimenezhardy/" rel="noreferrer" target="_blank"><FaLinkedin className="fab icon"/></a>
                <a href="https://github.com/hardyrafael17" rel="noreferrer" target="_blank"><FaGithub className="fab icon" /></a>
                <a href="tel:+34612634"><FaPhone className="fab icon"/></a>
              </div>
            </section>
        </div>
      )
    };