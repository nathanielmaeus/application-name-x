import React, { useCallback, useReducer } from "react";

import styles from "./form.scss";
import { Button } from "src/components/button";
import { Input } from "src/components/input";

interface IApplicantFormProps {
  onSubmit: (state: IForm) => void;
}

export interface IForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface IResult {
  id: string;
  value: string;
}

interface IAction {
  type: "CHANGE";
  result: IResult;
}

const initialState: IForm = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

function mainReducer(state: IForm, action: IAction) {
  switch (action.type) {
    case "CHANGE": {
      const { id, value } = action.result;
      return {
        ...state,
        [id]: value,
      };
    }
    default: {
      return state;
    }
  }
}

function ApplicantForm({ onSubmit }: IApplicantFormProps) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const handleChange = useCallback((id: string, value: string) => {
    dispatch({ type: "CHANGE", result: { id, value } });
  }, [dispatch])

  const handleSubmit = useCallback((e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    onSubmit(state);
  }, [onSubmit, state]);

  const renderFields = () => (
    <fieldset className={styles.block}>
      <Input
        id="email"
        name="Email"
        placeholder="join@join.com"
        onChange={handleChange}
        onEnter={handleChange}
        value={state.email}
      />
      <Input
        id="password"
        name="Password"
        type="password"
        placeholder="Choose a password"
        onChange={handleChange}
        onEnter={handleChange}
        value={state.password}
      />
      <div className={styles.group}>
        <Input
          id="firstName"
          name="First Name"
          placeholder="Joe"
          onChange={handleChange}
          onEnter={handleChange}
          value={state.firstName}
        />
        <Input
          id="lastName"
          name="Last Name"
          placeholder="Doe"
          onChange={handleChange}
          onEnter={handleChange}
          value={state.lastName}
        />
      </div>
      <Input
        id="phoneNumber"
        type="tel"
        pattern="[+]{1}[0-9]{11,14}"
        name="Phone Number"
        placeholder="+12311123344"
        onChange={handleChange}
        onEnter={handleChange}
        value={state.phoneNumber}
      />
    </fieldset>
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {renderFields()}
      <Button type="submit" className={styles.submitButton}>
        Continue
      </Button>
    </form>
  );
}

export default React.memo(ApplicantForm);
