import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field.component';
import { InputFieldControlDirective } from './input-field-control.directive';
import { InputLabelDirective } from './input-label.directive';
import { InputSuffixDirective } from './input-suffix.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InputFieldComponent,
    InputFieldControlDirective,
    InputLabelDirective,
    InputSuffixDirective,
  ],
  exports: [
    InputFieldComponent,
    InputFieldControlDirective,
    InputLabelDirective,
    InputSuffixDirective,
  ],
})
export class InputFieldModule {}
