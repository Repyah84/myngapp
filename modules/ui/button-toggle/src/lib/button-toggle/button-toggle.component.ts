import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { ToggleDirective } from '../directives/toggle.directive';

@Component({
  selector: 'ngn-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  exportAs: 'ngnButtonToggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent<T> implements AfterContentInit {
  private _value?: T;

  public toggleList$?: Observable<ToggleDirective<T>[]>;

  @Input()
  public set value(value: T | undefined) {
    this._value = value;
  }

  public get value(): T | undefined {
    return this._value;
  }

  @Output()
  public readonly buttonToggleValueChange = new EventEmitter<T>();

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

  protected onToggleClick(value?: T): void {
    if (value === this._value) {
      return;
    }

    this.value = value;

    this.buttonToggleValueChange.emit(value);
  }
}
