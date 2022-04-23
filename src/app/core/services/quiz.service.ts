import { Injectable } from '@angular/core';

//Firestore
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { IQuiz } from '../interfaces/quiz';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    constructor(private db: AngularFirestore) { }

    addQuiz(quizz: IQuiz): void {
        const quizzesRef = this.db.collection('quizzes');
        const newQuiz = quizz;
        quizzesRef.add({ ...newQuiz });
    }
}

 // async addRecipe() {

    //     try {
    //         const docRef = await addDoc(collection(db, "recepies"), data);
    //         // console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //         throw "Error adding recipe";
    //     }
    //     // Add a new document in collection "recepies"
    // }
