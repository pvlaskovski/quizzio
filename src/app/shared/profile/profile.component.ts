import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    quizzes: any = [
        {
            'title': 'Some title 1',
            'questions': 'some questions 1'
        },
        {
            'title': 'Some title 2',
            'questions': 'some questions 2'
        },
    ];

    panelOpenState: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}
