import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    CustomProgressBarComponent,
    QuizDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
  ],
  exports:[
      CustomProgressBarComponent,      
      QuizDetailsComponent,
  ]
})
export class SharedModule { }
