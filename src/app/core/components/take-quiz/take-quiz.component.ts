import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuiz } from '../../interfaces/quiz';
import { QuizService } from '../../services/quiz.service';

@Component({
    selector: 'app-take-quiz',
    templateUrl: './take-quiz.component.html',
    styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

    constructor(private route: ActivatedRoute, private quizService: QuizService) { }

    quiz!: IQuiz;
    isInEditMode: boolean = false;
    addExtraButtons: boolean = true;
   


    ngOnInit(): void {
        const quizId = this.route.snapshot.paramMap.get('id');
        // console.log(quizId);
        this.quizService.getQuizByQuizId(quizId || '').subscribe(quiz => this.quiz = quiz)
    }

}
