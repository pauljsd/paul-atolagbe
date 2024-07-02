import React from "react";
import styles from "./ProjectStyles.module.css";
import netflix from "../../assets/netflix.jpeg";
import expert from "../../assets/expert.png";
import travelerList from "../../assets/traveller-list.jpeg";
import monster from "../../assets/monsterr.jpeg";
import dice from "../../assets/dice.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={netflix}
          hostLink="https://practisenetflix.netlify.app"
          h3="Netflix Clone"
          githubLink="https://github.com/pauljsd/Netflix-Landing-Page-Clone"
        />
        <ProjectCard
          src={expert}
          hostLink="https://expertscorneradminlive.netlify.app/"
          h3="Expert Corner"
          githubLink="https://github.com/pauljsd/finalExpertCorner"
        />
        <ProjectCard
          src={travelerList}
          hostLink="https://traveller-list.netlify.app/"
          h3="Traveller List"
          githubLink="https://github.com/pauljsd/traveler-list"
        />
        <ProjectCard
          src={monster}
          hostLink="https://monnsterapp.netlify.app/"
          h3="Monster App"
          githubLink="https://github.com/pauljsd/monster-react-app"
        />
        <ProjectCard
          src={dice}
          hostLink="https://randomnumberguess-game.netlify.app/"
          h3="Guess Game"
          githubLink="https://github.com/pauljsd/Guess-my-number-game"
        />
      </div>
    </section>
  );
}

export default Projects;
