import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, NgForm } from '@angular/forms';
import { stringsMatchValidator } from 'src/app/shared/validators/stringsMatchValidator';
import { IQuiz } from '../../interfaces/quiz';
import { IQuestion, QuestionTypes } from '../../interfaces/question';
import { QuizService } from '../../services/quiz.service';
import { IUser } from '../../interfaces/iuser';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-add-quizz',
    templateUrl: './add-quizz.component.html',
    styleUrls: ['./add-quizz.component.css']
})
export class AddQuizzComponent implements OnInit {
    newQuizz: IQuiz = {
        title: '',
        creatorId: '',
        topic: '',
        questions: [],
    };

    isInEditMode: boolean = true;
    user: IUser | undefined;

    constructor(private formBuilder: FormBuilder, private quizService: QuizService, private router: Router, private snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem("user") || "")
        this.newQuizz.creatorId = this.user?.uid || "";
    }

    saveQuiz(form: NgForm): void {
        const title: string = form.controls['title'].value;
        const topic: string = form.controls['topic'].value;
        this.newQuizz.title = title;
        this.newQuizz.topic = topic;

        // console.log(this.newQuizz);

        try {
            this.quizService.addQuiz(this.newQuizz);
            this.snackBar.open('Quiz saved!', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' });
            this.router.navigate(['/']);

        } catch (error) {
            this.snackBar.open('Quiz not saved! PLease try again', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' });
            console.log(error);
        }
    }

    addTrueFalseQuestion(form: NgForm): void {
        const question: string = form.controls['question'].value;
        const selectedRadioButtonValue: string = form.controls['radioControl'].value;

        let correctAnswer: string;
        let incorrectAnswer: string;

        if (selectedRadioButtonValue == 'true') {
            correctAnswer = 'true';
            incorrectAnswer = 'false';
        } else {
            correctAnswer = 'false';
            incorrectAnswer = 'true';
        }

        const newQuestion = {
            question: question,
            type: QuestionTypes['true-false'],
            correctAnswers: [correctAnswer],
            incorrectAnswers: [incorrectAnswer]
        }

        this.newQuizz.questions.push(newQuestion);
        form.reset()
    }
}
