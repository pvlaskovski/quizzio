import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { IQuestion } from 'src/app/core/interfaces/question';
import { IQuiz } from 'src/app/core/interfaces/quiz';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Output, EventEmitter } from '@angular/core';

import { QuizResultDialogComponent } from '../quiz-result-dialog/quiz-result-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/core/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-quiz-details',
    templateUrl: './quiz-details.component.html',
    styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {

    constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private quizService: QuizService, private router: Router) { }
    @ViewChild(MatAccordion) accordion!: MatAccordion;
    @ViewChild('trueFalseQuestion') form!: NgForm

    @Input() quiz!: IQuiz;
    @Input() isInEditMode: boolean = false;
    @Input() addExtraButtons: boolean = false;

    @Output() updateQuizEvent = new EventEmitter<{}>();

    correctAnswers: string[] = [];
    defaultChoice: boolean = true;
    isAuthor: boolean = false;
    localUserId: string = '';
    bottomSaveButton: boolean = false;

    ngOnInit(): void {
        let localUser = JSON.parse(localStorage.getItem("user") || "");
        this.localUserId = localUser?.uid;
    }

    toggleEditMode(): void {
        this.isInEditMode = !this.isInEditMode;
    }

    deleteQuestion(index: number) {
        const dialogData = { text: 'Are you sure you want to delete this question?' };
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                if (index > -1 && index < this.quiz.questions.length) {
                    this.quiz.questions.splice(index, 1)
                } else {
                    console.log('Index out of bounds');
                }
            } else {
                dialogRef.close();
            }
        })
    }

    radioChange(event: any, index: number) {
        console.log(event.value);
        this.quiz.questions[index].correctAnswers = [];
        this.quiz.questions[index].incorrectAnswers = [];

        this.quiz.questions[index].correctAnswers.push(event.value);

        if (event.value === 'true') {
            this.quiz.questions[index].incorrectAnswers.push('false');
        } else {
            this.quiz.questions[index].incorrectAnswers.push('true');
        }
        this.snackBar.open('Correct answer updated!', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' })
    }

    updateQuestion(index: number) {
        let question = this.form.controls['question'].value;
        console.log(index);

        // this.quiz.questions[0] = question;
        if (question.length > 9) {
            this.snackBar.open('Question updated!', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' });
        }

        console.log(this.quiz);
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

    deleteQuiz(quizId: string) {
        const dialogData = { text: 'Are you sure you want to delete this quiz?' };
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                this.quizService.deleteQuizById(quizId);
                this.router.navigate(['/']);
            } else {
                dialogRef.close();
            }
        })
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

    saveQuiz(quizId: string): void {
        try {
            this.quizService.updateQuiz(quizId, this.quiz);
            this.snackBar.open('Quiz updated!', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' })
            this.router.navigate(['/']);
        } catch (error) {
            this.snackBar.open('Unable to update quiz!', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' })
        }
    }
}
