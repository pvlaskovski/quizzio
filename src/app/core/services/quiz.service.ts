import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



//Firestore
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IQuiz } from '../interfaces/quiz';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    items: Observable<IQuiz[]> | undefined;


    constructor(private db: AngularFirestore) {


    }

    addQuiz(quizz: IQuiz): void {
        const quizzesRef = this.db.collection('quizzes');
        const newQuiz = quizz;
        quizzesRef.add({ ...newQuiz });
    }

    getAllQuizzes(): Observable<IQuiz[]> {
        return this.db.collection('quizzes').snapshotChanges().pipe(
            map(changes =>
                changes.map(c => {
                    const data = c.payload.doc.data() as IQuiz;
                    data.id = c.payload.doc.id;
                    return data;
                })
            )
        )
    }

    getQuizzesByUserId(userId: string): Observable<any> {
        return this.db.collection('quizzes', ref => ref.where('creatorId', '==', userId)).snapshotChanges().pipe(
            map(changes =>
                changes.map(c => {
                    const data = c.payload.doc.data() as IQuiz;
                    data.id = c.payload.doc.id;
                    return data;
                })
            )
        )
    }

}
