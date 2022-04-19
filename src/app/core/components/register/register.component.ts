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

    lowPassRegex = new RegExp(/^.{4,}$/gm);
    mediumPassRegex = new RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/gm);
    strongPassRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/gm;

    isPasswordVisible: boolean = false;
    isRePasswordVisible: boolean = false;
    isSuccesfullRegister: boolean = true;

    passwordStrenghtMeter: number = 0;
    passwordStrenghtColor: string = '';
    passwordStrenghtNote: string = '';

    passwordControl = new FormControl('', [Validators.required]);

    get passwordsGroup(): FormGroup {
        return this.registerForm.controls['passwords'] as FormGroup;
    }

    registerForm: FormGroup = this.formBuilder.group({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'passwords': new FormGroup({
            'password': this.passwordControl,
            'rePassword': new FormControl('', [Validators.required, stringsMatchValidator(this.passwordControl)])
        })
    });

    constructor(public authService: AuthService, private formBuilder: FormBuilder,) { }

    ngOnInit(): void {

        //Listen for password strenght and update strenght bar properties
        this.passwordsGroup.controls['password'].valueChanges.subscribe((value: string) => {
            if (value.match(this.strongPassRegex)) {
                this.passwordStrenghtMeter = 100;
                this.passwordStrenghtColor = 'green';
                this.passwordStrenghtNote = 'Strong';
            } else if (value.match(this.mediumPassRegex)) {
                this.passwordStrenghtMeter = 66;
                this.passwordStrenghtColor = 'orange';
                this.passwordStrenghtNote = 'Medium';
            } else if (value.match(this.lowPassRegex)) {
                this.passwordStrenghtMeter = 33;
                this.passwordStrenghtColor = 'red';
                this.passwordStrenghtNote = 'Weak';
            } else if (value.length < 4) {
                this.passwordStrenghtMeter = 0;
                this.passwordStrenghtNote = '';
            }
        })
    }

    ngAfterViewInit(): void {
        // console.log(this.form);
        console.log('inint');
    }

    onSubmit(): void {
        // TODO: check if PW and repeat PW match
        // TODO: display error if registration fails
        // TODO: return this email is already registered
        console.log(this.registerForm.value);
        // this.authService.register()
        // this.isSuccesfullRegister = false;
    }




    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    toggleRePasswordVisibility(): void {
        this.isRePasswordVisible = !this.isRePasswordVisible;
    }


}
