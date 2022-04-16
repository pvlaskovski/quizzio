//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';

// Services
import { AuthService } from './core/services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        AngularFireModule.initializeApp(
            {
                apiKey: "AIzaSyAIcBS-kb8AjyRyJFAVxFhCq1AFQSdB3pI",
                authDomain: "quizzio-2daf3.firebaseapp.com",
                projectId: "quizzio-2daf3",
                storageBucket: "quizzio-2daf3.appspot.com",
                messagingSenderId: "28761128387",
                appId: "1:28761128387:web:e0ad436f86aa5375455176"
            }
        ),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        AppRoutingModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
