import React from "react";
import { FaChrome, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaNode, FaNpm, FaReact, FaTerminal } from "react-icons/fa";
import jamming from "../../Images/Jammming.png";
import profilePicture from "../../Images/jimenez2.png";
import flashcards from "../../Images/flashcards.png";
import newsReader from "../../Images/nes-reader.png"

export const Main = () => {
    return (
        <main>
            <section id="about-me">
            <div className="about-me-container">
                <div className="about-me-text-container">
                <h2>About Me</h2>
                <p>In software development I have finnaly found my passion, I'm somewhat autodidact and like learning and challenging myself with new taks every day, for now I'm doing everything I can to get more proficient in the the front end development field and have seen many directions in which I want to go, being the main goal understandign the software development cycle and and advanced understand all how manchines work in the low level so that I can design software that is highly efficient</p>
                </div>
                <img src={profilePicture} alt="Hardy R. Jimenez Matos" className="portrait" />
            </div>
            </section>
            <section id="projects">
            <h2>Projects</h2>
            <details className="project">
                <summary className="project-title">
                <h3>News Reader</h3>
                </summary>
                <img src={newsReader} alt="News Raeder" className="project-image" />
                <p className="project-description">
                A project to demonstrate the use of React Redux Store by Codecademy. In this project you can add comments to each article, the imortant part of the project occurs in the background in the way how the articles are loaded, there is API mocking, Http requests, Asyncronous and the use of the Redux Toolkit, In order to see the page live, please go to<a href="https://news-reader-react-redux.web.app/" rel="noreferrer" target="_blank" >Jammming @ Surge</a> and for the code at github please follow this link <a href="https://github.com/hardyrafael17/all-projects/tree/main/react-redux/flashcards" rel="noreferrer" target="_blank" >Flashcards @GitHub</a>
                </p>
            </details>
            <details className="project">
                <summary className="project-title">
                <h3>Flash Cards</h3>
                </summary>
                <img src={flashcards} alt="Flash Cards" className="project-image" />
                <p className="project-description">
                A small project to demmonstrate and practice the utility of having a state store in a project, with this program you can reate topics exams and cards and link each to individual assets and an also it's possible to  <a href="https://react-redux-toolkit-flashcards.web.app/" rel="noreferrer" target="_blank" >Jammming @ Surge</a> and for the code at github please follow this link <a href="https://github.com/hardyrafael17/all-projects/tree/main/react-redux/flashcards" rel="noreferrer" target="_blank" >Flashcards @GitHub</a>
                </p>
            </details>
            <details className="project">
                <summary className="project-title">
                <h3>Jammming</h3>
                </summary>
                <img src={jamming} alt="ScreenShot of the Jamming web page runnign" className="project-image" />
                <p className="project-description">
                A challenging project which is still in the process, in this project with demonstrate the usage of an API, in this case from Spotify, in order to request information and for playlists. To see the project live follow the link <a href="https://superjammingbandreact.surge.sh/" rel="noreferrer" target="_blank" >Jammming @ Surge</a> and for the code at github please follow this link <a href="https://github.com/hardyrafael17/react-jamming-codecademy" rel="noreferrer" target="_blank" >Jammming @GitHub</a>
                </p>
            </details>
            </section>
            <section id="skills">
            <h2>Skills</h2>
            <div id="skills-container">
                <FaJs className="fab" />
                <FaReact className="fab" />
                <FaNpm className="fa" />
                <FaHtml5 className="fab"/>
                <FaCss3 className="fab" />
                <FaGit className="fab" />
                <FaGithub className="fab"/>
                <FaTerminal className="fa"/>
                <FaNode className="fab" />
                <FaChrome className="fa"/>
            </div>
            </section>
        </main>
    )
}