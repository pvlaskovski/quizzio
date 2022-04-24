import { IQuestion } from "./question";

export interface IQuiz{
    id?: string,
    creatorId: string,
    title: string,
    topic: string,
    questions: IQuestion[],
}