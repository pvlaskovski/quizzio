import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { QuizResultDialogComponent } from './components/quiz-result-dialog/quiz-result-dialog.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    CustomProgressBarComponent,
    QuizDetailsComponent,
    QuizResultDialogComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
  ],
  exports:[
      CustomProgressBarComponent,      
      QuizDetailsComponent,
  ]
})
export class SharedModule { }
