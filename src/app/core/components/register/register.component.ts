import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

    @ViewChild('registerForm') form!: NgForm;

    constructor(public authService: AuthService) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        console.log(this.form);
        console.log('inint');
    }

    onSubmit(): void{
        const content = this.form.value;
        console.log(content);
        
    }


}
