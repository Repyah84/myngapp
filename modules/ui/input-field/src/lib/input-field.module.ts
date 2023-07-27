import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field.component';
import { InputFieldControlDirective } from './input-field-control.directive';
import { InputLabelDirective } from './input-label.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InputFieldComponent,
    InputFieldControlDirective,
    InputLabelDirective,
  ],
  exports: [
    InputFieldComponent,
    InputFieldControlDirective,
    InputLabelDirective,
  ],
})
export class InputFieldModule {}
