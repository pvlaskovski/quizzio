import { IQuestion } from "./question";

export interface IQuiz{
    id?: string,
    title: string,
    topic: string,
    questions: IQuestion[],
}