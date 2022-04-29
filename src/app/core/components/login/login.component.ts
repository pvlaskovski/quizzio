import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('loginForm') loginForm!: NgForm;

    isSuccesfullLogin: boolean = true;
    isPasswordVisible: boolean = false;

    constructor(public authService: AuthService) { }

    ngOnInit(): void {

    }

    togglePasswordVisibility(): void{
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    onSubmit(): void {
        console.log(this.loginForm.value);
        const { email, password } = this.loginForm.value;
        this.authService.logIn(email, password);
        // this.isSuccesfullLogin = this.authService.isLoggedIn;
    }

}
