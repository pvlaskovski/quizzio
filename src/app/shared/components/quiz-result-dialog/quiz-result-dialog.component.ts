import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quiz-result-dialog',
    templateUrl: './quiz-result-dialog.component.html',
    styleUrls: ['./quiz-result-dialog.component.css']
})
export class QuizResultDialogComponent implements OnInit {

    constructor(
        private router: Router,
        public dialogRef: MatDialogRef<QuizResultDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {
            correctAnswers: string,
            allAnswers: string,
        }) { }

    ngOnInit(): void {
    }

    handleDialogClick(): void {
        this.dialogRef.close();
        this.router.navigate(['/']);
    }
}
