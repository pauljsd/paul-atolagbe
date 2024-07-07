import React from "react";
import styles from "../sections/Certifications/CertificationStyles.module.css";

function CertificateCard({ src, certLink, h3 }) {
  return (
    <div className={styles.eachCert}>
      <a href={certLink} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} />
      </a>
      <h3>{h3}</h3>
    </div>
  );
}

export default CertificateCard;
