export interface ICandidate {
  id: number,
  fullName: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  applied_on: string;
  state: string;
  progress?: number;
}

