import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor(private authService: AuthService) { }

    isLoggedIn: boolean | undefined;


    ngOnInit(): void {
        this.authService.isLoggedIn().subscribe(user => {
            if (user) {
                this.isLoggedIn = true
            } else {
                this.isLoggedIn = false;
            }
        })
    }

    handleLogout(): void {
        this.authService.logOut();
    }

}
