import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { AddQuizzComponent } from './core/components/add-quizz/add-quizz.component';
import { HomeComponent } from './core/components/home/home.component';
import { OnlyLoggedInUsersGuard } from './core/guards/only-logged-in-users.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', canActivate: [OnlyLoggedInUsersGuard], component: ProfileComponent },
    { path: 'add-quizz', canActivate: [OnlyLoggedInUsersGuard], component: AddQuizzComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
