import { Injectable } from '@angular/core';

//Firestore
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private db: AngularFirestore) { }

    getUserById(userId: string):  Observable<IUser> {
        return this.db.doc(`users/${userId}`).snapshotChanges().pipe(
            map(changes => {
                const data = changes.payload.data() as IUser;
                return data;
            })
        )
    }

}
