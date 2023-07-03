import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[ngnToggle]',
})
export class ToggleDirective<T> {
  @Input()
  public ngnToggleValue?: T;

  public constructor(public readonly template: TemplateRef<unknown>) {}
}
