import { Component, Input, OnInit } from '@angular/core';
import { IQuiz } from 'src/app/core/interfaces/quiz';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {

  constructor() { }

  @Input()quiz!: IQuiz;

  ngOnInit(): void {
  }

}
