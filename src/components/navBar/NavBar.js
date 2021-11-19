import React from "react";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view"

export const NavBar = () => {
    return (
      <nav>
        <h2 id="logo">Hardy R. Jimenez M.</h2>
        <ul className="navigation-items">
          <li className="navigation-item"><Link to="/#about-me">About Me</Link></li>
          <ScrollIntoView
            selector="#projects">
          <li className="navigation-item"><Link to="/#projects">Projects</Link></li></ScrollIntoView>
          <ScrollIntoView
            selector="#skills">
            <li className="navigation-item"><Link to="/#skills">Skills</Link></li></ScrollIntoView>
          <li className="navigation-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
}