import React from "react";
import styles from "../sections/Projects/ProjectStyles.module.css";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";

function ProjectCard({ src, hostLink, h3, githubLink }) {
  return (
    <div className={styles.eachCard}>
      <a href={hostLink} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} />
      </a>
      <div className={styles.projectDetails}>
        <h3>{h3}</h3>
        <a href={githubLink} target="_blank">
          <img
            className={styles.smallIcon}
            src={githubLight}
            alt="github logo"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
