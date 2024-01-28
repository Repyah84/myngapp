import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  TemplateRef,
} from '@angular/core';
import { InputFieldControlDirective } from './input-field-control.directive';
import { AbstractControl, NgControl } from '@angular/forms';
import { InputLabelDirective } from './input-label.directive';
import { InputSuffixDirective } from './input-suffix.directive';

@Component({
  selector: 'ngn-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
  @HostBinding('class.error') public get errorState(): boolean {
    const control = this._control;

    return !!control && control.touched && control.errors !== null;
  }

  @HostBinding('class.pending') public get pendingState(): boolean {
    const control = this._control;

    return !!control && !!control.value;
  }

  @HostBinding('class.label-is') public get labelIs(): boolean {
    return !!this.inputLabel;
  }

  @ContentChild(InputFieldControlDirective, { read: NgControl })
  public readonly componentControl!: NgControl;

  @ContentChild(InputSuffixDirective, { read: TemplateRef })
  public readonly inputSuffix?: TemplateRef<unknown>;

  @ContentChild(InputLabelDirective, { read: TemplateRef })
  public readonly inputLabel?: TemplateRef<unknown>;

  private get _control(): AbstractControl<unknown, unknown> | null {
    return this.componentControl.control;
  }
}
