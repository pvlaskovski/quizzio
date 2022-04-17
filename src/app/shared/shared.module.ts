import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar.component';



@NgModule({
  declarations: [
    CustomProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
      CustomProgressBarComponent
  ]
})
export class SharedModule { }
