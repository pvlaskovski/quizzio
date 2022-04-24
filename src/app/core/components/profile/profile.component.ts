import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from '@firebase/util';
import { mergeMap, tap } from 'rxjs';
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
    favQuizzes: IQuiz[] = [];

    panelOpenState: boolean = false;
    localUser: IUser | undefined;
    user: IUser | undefined;
    favQuizzesIds: string[] | undefined;

    constructor(private userService: UserService, private quizService: QuizService) { }


    ngOnInit(): void {
        this.localUser = JSON.parse(localStorage.getItem("user") || "");

        this.quizService.getQuizzesByUserId(this.localUser?.uid || "").subscribe(value => {
            // console.log(value);
            this.quizzes = value;
        })



    }
}
