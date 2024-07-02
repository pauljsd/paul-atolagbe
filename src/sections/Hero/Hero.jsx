import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import whatsappIcon from "../../assets/whatSappIcon.png";
import CV from "../../assets/CV Paul Atolagbe Ayobami.pdf";
import { useTheme } from "../../common/ThemeContent";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Paul Atolagbe"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Paul Atolagbe</h1>
        {/* <h1>Software QA Analyst</h1> */}
        <h1>FrontEnd Engineer</h1>
        <span>
          <a href="https://x.com/paul_JSD" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a
            href="https://wa.me/2348154505895?text=Hello%20Paul,%20I%20have%20this%20Mobile%20App/%20Web%20Design%20that..."
            target="_blank"
            ta
          >
            <img src={whatsappIcon} alt="Whatsapp Icon" />
          </a>
          <a href="https://github.com/pauljsd" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am a passionate web and mobile application developer flair for
          creating dynamic and user-friendly digital experiences. With expertise
          in front-end development, I bring innovative solutions to life,
          ensuring seamless performance and exceptional design. I am dedicated
          to delivering high-quality projects that meet client needs and exceed
          expectations.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
