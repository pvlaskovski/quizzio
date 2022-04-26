import { Component, Input, OnInit } from '@angular/core';
import { IQuiz } from 'src/app/core/interfaces/quiz';

@Component({
    selector: 'app-quiz-details',
    templateUrl: './quiz-details.component.html',
    styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {

    constructor() { }

    @Input() quiz!: IQuiz;

    isInEditMode: boolean = false;

    ngOnInit(): void {
    }

    toggleEditMode(): void {
        this.isInEditMode = !this.isInEditMode;
    }

    deleteQuestion(index: number) {
        if (index > -1 && index < this.quiz.questions.length) {
            this.quiz.questions.splice(index, 1)
        }else{
            console.log('Index out of bounds');
            
        }
    }

}
