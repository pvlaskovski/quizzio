import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

// Angular Materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';



import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddQuizzComponent } from './components/add-quizz/add-quizz.component';
import { HomeComponent } from './components/home/home.component';
import { TakeQuizComponent } from './components/take-quiz/take-quiz.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent,
        AddQuizzComponent,
        HomeComponent,
        TakeQuizComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatListModule,
        MatExpansionModule,
        MatProgressBarModule,
        AppRoutingModule,
        MatSelectModule,
        MatRadioModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent,
    ]
})
export class CoreModule { }
