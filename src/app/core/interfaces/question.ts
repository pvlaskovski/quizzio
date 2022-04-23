export enum QuestionTypes{
    'true-false',
    'multi-choice',
    'multi-answers',
}

export interface IQuestion{
    question: string,
    type: QuestionTypes,
    correctAnswers: string[],
    incorrectAnswers: string[],
}