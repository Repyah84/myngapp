import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ToggleDirective } from './directives/toggle.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonToggleComponent, ToggleDirective],
  exports: [ButtonToggleComponent, ToggleDirective],
})
export class ButtonToggleModule {}
