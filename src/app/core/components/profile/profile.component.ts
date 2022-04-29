import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { mergeMap, tap, firstValueFrom } from 'rxjs';
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
            this.quizzes = value;
        })

        const userPromise = firstValueFrom(this.userService.getUserById(this.localUser?.uid || ''));
        userPromise.then(user => {
            user.favoriteQuizzes?.forEach(id => {
                this.quizService.getQuizByQuizId(id).subscribe(quiz => {
                    this.favQuizzes = this.favQuizzes.filter(x => x.id?.toString() !== quiz.id?.toString());
                    this.favQuizzes.push(quiz);
                })
            })
        })
    }
}
