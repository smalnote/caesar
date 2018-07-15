import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProgressbarComponent
  ],
  declarations: [ProgressbarComponent]
})
export class ControlModule { }
