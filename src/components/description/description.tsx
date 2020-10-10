import React from "react";
import cls from "classnames";
import styles from "./description.scss";

interface IDescription {
  className: string;
}

const Description: React.FC<IDescription> = ({ className }) => {
  return (
    <div className={cls(styles.container, className)}>
      <h2 className={styles.header}>Senior Frontend Engineer (React.js)</h2>
      <p className={styles.mainInfo}>
        As a Senior Frontend Engineer at JOIN.com, you will shape the way
        companies attract qualified talent faster and more effectively around
        the globe.
      </p>
      <p className={styles.restInfo}></p>
      <h3>Tasks</h3>
      <ul className={styles.list}>
        <li>
          Participate in architectural design and decision-making, solving
          challenges like separation of concerns, state management, patterns
          application, performance, usability, security and many more! Take a
          product assignment and lead it to completion, be responsible for all
          the phases of planning, development and delivery in our Kanban process
        </li>
        <li>
          Take a product assignment and lead it to completion, be responsible
          for all the phases of planning, development and delivery in our Kanban
          process
        </li>
        <li>
          Work in our well organised monolithic frontend application and prepare
          to split it in the future to frontend apps by business context{" "}
        </li>
        <li>
          Conduct peer code reviews and attend retrospectives to plan and
          execute improvements as a team Use modern technologies: TypeScript,
          React.js, Redux, GraphQL, gcloud, Kubernetes, Docker{" "}
        </li>
      </ul>
      <h3>Get involved in technological projects together with</h3>
      <ul className={styles.list}>
        <li>
          Principal Engineers and further improve our architecture, scalability
          and security to fulfil the need of our ever growing solution You are
          expected to demonstrate great communication, ownership, accountability
          and team play skills
        </li>
        <li>
          You are not “just” a coder — you are always thinking about our product
          and how to improve the experience of our clients Requirements
        </li>

        <h3>SOFT SKILLS:</h3>
        <li>
          Use data or reliable source of information to drive the decision
          making during discussion, design or implementation phases Have the
          ability to take on complex problems, learn quickly, and persist
          towards a good solution
        </li>
        <li>
          Be conscious about speed of delivery vs quality of code and find the
          best balance
        </li>
      </ul>
      <h3>HARD SKILLS:</h3>
      <ul className={styles.list}>
        <li> 5+ years of web development experience</li>
        <li>
          Strong development experience in React.js and Redux (at least 2 years)
        </li>
        <li>Extensive unit testing or E2E skills</li>
      </ul>
    </div>
  );
};

export default React.memo(Description);
