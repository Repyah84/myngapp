import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ToggleDirective } from './directives/toggle.directive';
import { ButtonToggleFieldComponent } from './button-toggle/button-toggle-field.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonToggleComponent,
    ToggleDirective,
    ButtonToggleFieldComponent,
  ],
  exports: [ButtonToggleComponent, ToggleDirective, ButtonToggleFieldComponent],
})
export class ButtonToggleModule {}
