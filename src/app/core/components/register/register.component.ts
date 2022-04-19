import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { stringsMatchValidator } from 'src/app/shared/validators/stringsMatchValidator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

    isPasswordVisible: boolean = false;
    isRePasswordVisible: boolean = false;
    isSuccesfullRegister: boolean = false;

    passwordControl = new FormControl('', [Validators.required]);

    get passwordsGroup(): FormGroup {
        return this.registerForm.controls['passwords'] as FormGroup;
    }

    registerForm: FormGroup = this.formBuilder.group({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'passwords': new FormGroup({
            'password': this.passwordControl,
            'rePassword': new FormControl('', [Validators.required,stringsMatchValidator(this.passwordControl)])
        })
    });


    constructor(public authService: AuthService, private formBuilder: FormBuilder,) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        // console.log(this.form);
        console.log('inint');
    }

    onSubmit(): void {
        console.log(this.registerForm.value);
        // this.authService.register()
        this.isSuccesfullRegister = true;
    }

    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    toggleRePasswordVisibility(): void {
        this.isRePasswordVisible = !this.isRePasswordVisible;
    }


}
