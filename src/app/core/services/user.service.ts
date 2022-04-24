import { Injectable } from '@angular/core';

//Firestore
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private db: AngularFirestore) { }

    getUser() {
        return this.db.collection('users').valueChanges();
    }

}
