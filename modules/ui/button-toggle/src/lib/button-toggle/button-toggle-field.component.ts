/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { Observable, startWith, map } from 'rxjs';
import { ToggleDirective } from '../directives/toggle.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngn-button-toggle-field',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ButtonToggleFieldComponent,
      multi: true,
    },
  ],
})
export class ButtonToggleFieldComponent<T>
  implements ControlValueAccessor, AfterContentInit
{
  public toggled?: number;

  public value?: T;

  public toggleList$?: Observable<ToggleDirective<T>[]>;

  public onChangeFn = (_value?: T): void => {};

  public onTouchedFn = (): void => {};

  @ContentChildren(ToggleDirective)
  public readonly toggleContentList?: QueryList<ToggleDirective<T>>;

  public ngAfterContentInit(): void {
    if (this.toggleContentList === undefined) {
      return;
    }

    this.toggleList$ = this.toggleContentList.changes.pipe(
      startWith(this.toggleContentList),
      map<QueryList<ToggleDirective<T>>, ToggleDirective<T>[]>((toggleList) =>
        toggleList.toArray()
      )
    );
  }

  protected onToggleClick(index: number, value?: T): void {
    if (this.value === value) {
      return;
    }

    this.toggled = index;

    this.value = value;

    this.onChangeFn(value);
    this.onTouchedFn();
  }

  public writeValue(value: T): void {
    this.value = value;
  }

  public registerOnChange(fn: () => void): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }
}
