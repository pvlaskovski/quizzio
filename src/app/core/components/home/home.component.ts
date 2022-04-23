import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { map } from 'rxjs/operators'
import { IQuiz } from '../../interfaces/quiz';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    quizzes: IQuiz[] | undefined;

    constructor(private quizService: QuizService) { }

    ngOnInit(): void {
        this.quizService.getAllQuizzes().subscribe(data => {
            this.quizzes = data;
        });
    }


}


