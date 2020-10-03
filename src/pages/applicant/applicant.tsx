import * as React from "react";
import { useHistory } from 'react-router-dom';

import { Form } from "src/components/form";
import { IForm } from "src/components/form/form";

import styles from "./applicant.scss";
import { formateFormData } from "./formateFormData";
import { saveCandidatesToLS } from "src/services/api";

interface IApplicantProps {}

const Applicant: React.FC<IApplicantProps> = ({}) => {
  const history = useHistory();

  const handleSubmit = (data: IForm) => {
    const formattedData = formateFormData(data);
    
    saveCandidatesToLS(formattedData);
    history.push('/candidates');
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
