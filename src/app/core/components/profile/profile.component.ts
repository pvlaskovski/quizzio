import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/iuser';
import { IQuiz } from '../../interfaces/quiz';
import { QuizService } from '../../services/quiz.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    quizzes: IQuiz[] | undefined;

    panelOpenState: boolean = false;
    user: IUser | undefined;

    constructor(private userService: UserService, private quizService: QuizService) { }

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem("user") || "");

        this.quizService.getQuizzesByUserId(this.user?.uid || "").subscribe(value=>{
            console.log(value);
            this.quizzes = value;
        })

    }
}
