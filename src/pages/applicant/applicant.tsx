import * as React from "react";
import { useLocation } from "wouter";
import { Description } from "src/components/description";
import { Form } from "src/components/form";
import { IForm } from "src/components/form/form";
import { saveCandidate } from "src/models/candidates";

import styles from "./applicant.scss";
import { formateFormData } from "./formateFormData";

const Applicant: React.FC = () => {
  const [, setLocation] = useLocation();

  const handleSubmit = (data: IForm) => {
    const formattedData = formateFormData(data);
    saveCandidate(formattedData);
    setLocation("/candidates");
  };

  return (
    <section className={styles.container}>
      <Description className={styles.vacancy} />
      <section className={styles.layout}>
        <div className={styles.title}>Interested in this job?</div>
        <div className={styles.about}>
          <div className={styles.avatar}></div>
          <div className={styles.description}>
            <div>Contact Person</div>
            <div>Wolf-Martin Naumann Homeday</div>
            <div>Recruiting Team</div>
          </div>
        </div>
        <Form onSubmit={handleSubmit} />
      </section>
    </section>
  );
};

export default Applicant;
