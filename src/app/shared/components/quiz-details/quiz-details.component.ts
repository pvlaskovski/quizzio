import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { IQuestion } from 'src/app/core/interfaces/question';
import { IQuiz } from 'src/app/core/interfaces/quiz';

import { QuizResultDialogComponent } from '../quiz-result-dialog/quiz-result-dialog.component';



@Component({
    selector: 'app-quiz-details',
    templateUrl: './quiz-details.component.html',
    styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }
    @ViewChild(MatAccordion) accordion!: MatAccordion;
    @Input() quiz!: IQuiz;

    isInEditMode: boolean = false;
    correctAnswers: string[] = [];

    ngOnInit(): void {
    }

    toggleEditMode(): void {
        this.isInEditMode = !this.isInEditMode;
    }

    deleteQuestion(index: number) {
        if (index > -1 && index < this.quiz.questions.length) {
            this.quiz.questions.splice(index, 1)
        } else {
            console.log('Index out of bounds');

        }
    }

    submitQuiz(): void {
        console.log('form submitted');
        // console.log(this.quiz);
        let myForm = document.getElementById('myForm');
        let formData = new FormData(myForm as any);

        // let correctAnswers = [];
        this.correctAnswers = [];
        let incorrectAnswers = [];
        let givenAnswers = [];

        for (let index = 0; index < this.quiz.questions.length; index++) {
            let currentAnswer = formData.get(index.toString())
            givenAnswers.push(currentAnswer);
        }

        for (let index = 0; index < this.quiz.questions.length; index++) {
            let currentAnswer = formData.get(index.toString());
            let questionCorrectAnswers = this.quiz.questions[index].correctAnswers;

            if (questionCorrectAnswers.length === 1) {
                const isCorrect = currentAnswer?.toString() === questionCorrectAnswers[0].toString();
                if (isCorrect) {
                    this.correctAnswers.push(index.toString());
                } else {
                    incorrectAnswers.push(index.toString());
                }
            } else {
                // TODO: for multiple choice questions
            }
        }

        // console.log('GIVEN ANSERS ARE: => ' + givenAnswers);
        // console.log('CORRECRT ANSWERS GIVEN ARE: => ' + this.correctAnswers);
        // console.log('INCORRECT ANSWERS GIVEN ARE: - > ' + incorrectAnswers);

        this.openDialog();
    }


    openDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
            correctAnswers: this.correctAnswers.length,
            allAnswers: this.quiz.questions.length,
        };

        this.dialog.open(QuizResultDialogComponent, dialogConfig);
    }

}
