import { IQuiz } from "./quiz";

export interface IUser {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    favoriteQuizzes?: IQuiz[]
}
