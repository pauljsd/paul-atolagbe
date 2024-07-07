import React from "react";
import styles from "./CertificationStyles.module.css";
import CertificateCard from "../../common/CertificateCard";
import react from "../../assets/react.png";
import javaScript from "../../assets/javascript.png";

function Certifications() {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.certificatesContainer}>
        <CertificateCard
          src={javaScript}
          certLink="https://drive.google.com/file/d/1FkSCWlxNgbduocE8rqm6xMT0c3-d2WSG/view"
          h3="JS Certificate"
        />
        <CertificateCard
          src={react}
          certLink="https://drive.google.com/file/d/18dgW4IkJcrLVVHqhl5RR1LK7G1G0GsQ8/view"
          h3="React Certificate"
        />
      </div>
    </section>
  );
}

export default Certifications;
