import { IQuestion } from "./question";

export interface IQuiz{
    title: string,
    topic: string,
    questions: IQuestion[],
}