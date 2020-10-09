import * as React from "react";
import { useHistory } from "react-router-dom";

import { Form } from "src/components/form";
import { IForm } from "src/components/form/form";
import { saveCandidate } from "src/model";

import styles from "./applicant.scss";
import { formateFormData } from "./formateFormData";

const Applicant: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (data: IForm) => {
    console.log(data);
    
    const formattedData = formateFormData(data);
    saveCandidate(formattedData);
    history.push("/candidates");
  };

  return (
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
  );
};

export default Applicant;
