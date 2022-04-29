import { Injectable } from '@angular/core';

//Firestore
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { firstValueFrom, map, Observable, tap } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private db: AngularFirestore) { }

    getUserById(userId: string): Observable<IUser> {
        return this.db.doc(`users/${userId}`).snapshotChanges().pipe(
            map(changes => {
                const data = changes.payload.data() as IUser;
                return data;
            })
        )
    }

    addFavoriteQuiz(userId: string, quizId: string): Promise<boolean> {

        let userDoc = this.db.doc(`users/${userId}`);

        return firstValueFrom(this.getUserById(userId))
            .then(user => {
                let favQ = user.favoriteQuizzes;

                if (!favQ?.includes(quizId)) {
                    favQ?.push(quizId);
                    userDoc.update({ favoriteQuizzes: favQ });
                    return true;
                } else {
                    return false;
                }
            })
    }


    removeFavoriteQuiz(userId: string, quizId: string): Promise<boolean> {

        let userDoc = this.db.doc(`users/${userId}`);

        return firstValueFrom(this.getUserById(userId))
            .then(user => {
                let favQ = user.favoriteQuizzes;

                if (favQ?.includes(quizId)) {
                    favQ = favQ?.filter(id => {
                        return id !== quizId
                    })
                    userDoc.update({ favoriteQuizzes: favQ });
                    return true;
                } else {
                    return false;
                }
            })
    }

}
