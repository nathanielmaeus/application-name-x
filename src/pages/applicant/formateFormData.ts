import { IForm } from "src/components/form/form";
import { ICandidate } from "src/types";

type IScore = {
  [key in keyof IForm]: number;
};

const SCORES: IScore = {
  firstName: 5,
  lastName: 5,
  email: 10,
  password: 10,
  phoneNumber: 20,
};

function getFormattedDate(): string {
  var date = new Date();
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function formateFormData(data: IForm): ICandidate {
  const { firstName, lastName, email, phoneNumber, password } = data;

  const formKeys = Object.keys(data) as Array<keyof typeof data>;

  const progress: number = formKeys.reduce((acc: number, key: keyof IForm) => {
    if (!data[key]) {
      return acc;
    }
    acc += SCORES[key];
    return acc;
  }, 0);

  console.log(progress);

  return {
    fullName: `${firstName} ${lastName}`,
    email,
    phone: phoneNumber,
    avatar: "",
    password,
    progress,
    state: "submitted",
    applied_on: getFormattedDate(),
  };
}
