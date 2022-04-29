import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { map } from 'rxjs/operators'
import { IQuiz } from '../../interfaces/quiz';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from '../../interfaces/iuser';
import { firstValueFrom } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    quizzes: IQuiz[] | undefined;
    localUser: IUser | undefined;
    currentUser: IUser | undefined;
    currentUserFavQuizzes: string[] | undefined;

    constructor(private quizService: QuizService, private userService: UserService, private snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.localUser = JSON.parse(localStorage.getItem("user") || "");

        this.userService.getUserById(this.localUser?.uid || '').subscribe(u =>{
            this.currentUser = u;
           
            this.currentUserFavQuizzes = u.favoriteQuizzes;
        })

        this.quizService.getAllQuizzes().subscribe(data => {
            this.quizzes = data;
        });
    }

    addToFavorite(userId: string, quizId: string): void {
        this.userService.addFavoriteQuiz(userId, quizId).then(res => {
            if (res) {
                this.snackBar.open('Quiz has been added to your favourites', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' })
            } else {
                this.snackBar.open('Quiz is already in your favourites', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' })
            }
        })
    }

    removeFromFavorite(userId: string, quizId: string): void{
        
        this.userService.removeFavoriteQuiz(userId, quizId).then(res => {
            if (res) {
                this.snackBar.open('Quiz has been removed your favourites', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' })
            } else {
                this.snackBar.open('Quiz is not in your favourites', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' })
            }
        })
    }

    copyLink(recipeId: string): void{
        let link = window.location.href + "take-quiz/" + recipeId;
        navigator.clipboard.writeText(link);
        if(link.length>0){
            this.snackBar.open('Link for the quiz copied', '', { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' })
        }
    }
}


