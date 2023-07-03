import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
} from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { ToggleDirective } from '../directives/toggle.directive';

@Component({
  selector: 'ngn-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent<T> implements OnChanges, AfterContentInit {
  public toggled?: number;

  public toggleList$?: Observable<ToggleDirective<T>[]>;

  @Input()
  public value?: T;

  @Output()
  public readonly toggleChange = new EventEmitter<T>();

  @ContentChildren(ToggleDirective)
  public readonly toggleContentList?: QueryList<ToggleDirective<T>>;

  public ngOnChanges(): void {
    if (this.value === undefined) {
      return;
    }

    this.toggleChange.emit(this.value);
  }

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
    if (value === this.value) {
      return;
    }

    this.value = value;

    this.toggled = index;

    this.toggleChange.emit(value);
  }
}
