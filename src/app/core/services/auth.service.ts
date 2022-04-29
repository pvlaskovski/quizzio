import { Injectable, NgZone } from '@angular/core';
import { IUser } from '../interfaces/iuser';

//Firestore
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    userData: any; // Save logged in user data

    constructor(
        public afs: AngularFirestore, // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public ngZone: NgZone // NgZone service to remove outside scope warning
    ) {
        /* Saving user data in localstorage when logged in and setting up null when logged out */
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user')!);
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });
    }

    // Sign in with email/password
    logIn(email: string, password: string) {
        return this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['/']);
                });
                this.SetUserData(result.user);
            })
            .catch((error) => {
                // console.log(error.message);
                // window.alert(error.message);
            });
    }

    // Sign up with email/password
    register(email: string, password: string): Promise<boolean> {   
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                this.SetUserData(result.user);
                this.router.navigate(['/']);
                return true;
            })
            .catch((error) => {
                window.alert(error.message);
                return false;
            });
    }

    // Reset Forggot password
    resetPassword(passwordResetEmail: string) {
        return this.afAuth
            .sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email sent, check your inbox.');
            })
            .catch((error) => {
                window.alert(error);
            });
    }

    // Returns true when user is looged in and email is verified
    // get isLoggedIn(): boolean {
    //     const user = JSON.parse(localStorage.getItem('user')!);
    //     return user !== null && user.emailVerified !== false ? true : false;  
    // }

    isLoggedIn(){
        return this.afAuth.user;
    }

    /* Setting up user data when sign in with username/password, 
    sign up with username/password and sign in with social auth  
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `users/${user.uid}`
        );
        const userData: IUser = {
            uid: user.uid,
            email: user.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            emailVerified: user.emailVerified,
            favoriteQuizzes: [],
        };
        return userRef.set(userData, {
            merge: true,
        });
    }

    // Sign out
    logOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);
        });
    }
}
