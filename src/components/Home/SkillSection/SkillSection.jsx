import React from "react";
import styles from "./SkillSection.module.scss";
import {
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
} from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { SiThealgorithms } from "react-icons/si";
const SkillSection = () => {
  return (
    <section className={styles.SkillSection}>
      <div className={styles.SkillContainer}>
    
        <h2 className={styles.SkillHeading}>Kỹ năng của tôi</h2>
        <div className={styles.SkillCard}>
        <IoLogoHtml5 size={24} />
          <h3 className={styles.SkillCardHeading}>HTML và css</h3>
          <ul>
            <li>HTML 5</li>
            <li>SASS, SCSS, Tailwing Css</li>
            <li>Flexbox and Grid system </li>
            <li>BEM Convention</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
        <div className={styles.SkillCard}>
          <IoLogoJavascript size={24}/>
          <h3 className={styles.SkillCardHeading}>JavaScript</h3>
          <ul>
            <li>ES6, ES2020, ...</li>
            <li>Object oriented</li>
            <li>Functional Programming</li>
            <li>Typescript</li>
            <li>Asynchronous Programming</li>
          </ul>
        </div>
        <div className={styles.SkillCard}>
          <IoLogoReact size={24}/>
          <h3 className={styles.SkillCardHeading}>React JS</h3>
          <ul>
            <li>React JS v.18.</li>
            <li>State Management: Redux, Redux Toolkits</li>
            <li>React Hooks</li>
            <li>React Router v6.4, ...</li>
          </ul>
        </div>
        <div className={styles.SkillCard}>
          <IoLogoNodejs size={24}/>
          <h3 className={styles.SkillCardHeading}>Node js</h3>
          <ul>
            <li>Express</li>
            <li>Database Management</li>
            <li>Build Rest full APIs</li>
            <li>Managing Errors</li>
          </ul>
        </div>
        <div className={styles.SkillCard}>
          <GoDatabase size={24}/>
          <h3 className={styles.SkillCardHeading}>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>Database Management</li>
            <li>Protect data</li>
          </ul>
        </div>
        <div className={styles.SkillCard}>
          <IoLogoReact size={24}/>

          <h3 className={styles.SkillCardHeading}>React Native</h3>
          <ul>
            <li>Build mobile app</li>
            <li>Build with Expo</li>
            <li>Working with JavaScript, CSS and HTML.</li>
          </ul>
        </div>
        <div className={styles.SkillCard}>
          <SiThealgorithms size={24}/>
          <h3 className={styles.SkillCardHeading}>
            Data Structures And Algorithms
          </h3>
          <ul>
            <li>Understand Time Complexity</li>
            <li>Understand Space Complexity</li>
            <li>Basic Data Structures </li>
            <li>Basic Algorithms </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
