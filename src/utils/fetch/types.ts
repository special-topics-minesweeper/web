import { Difficulty } from "../../containers/Game/types";

export interface ISignUp {
  email: string;
  username: string;
  password: string;
  lastName: string;
  firstName: string;
}

export interface ISignIn {
  login: string;
  password: string;
}

export interface IGame {
  difficulty: Difficulty;
}

export interface ICoordinates {
  x: number;
  y: number;
  gameId: string;
}
