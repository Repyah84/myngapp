import { TemplateRef } from '@angular/core';
import { ToggleDirective } from './toggle.directive';

describe('ToggleDirective', () => {
  it('should create an instance', () => {
    const directive = new ToggleDirective(null as any as TemplateRef<unknown>);
    expect(directive).toBeTruthy();
  });
});
