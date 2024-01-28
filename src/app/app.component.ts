import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'myngapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly control = new FormControl('');

  title = 'myngapp';

  public readonly toggleValueList = [
    {
      id: 1,
      value: 'first',
    },
    {
      id: 2,
      value: 'second',
    },
    {
      id: 3,
      value: 'trd',
    },
  ];

  public btnToggleValue = this.toggleValueList[1];

  public readonly buttonToggleList = ['first', 'second', 'trd'];

  public onSubmit(): void {
    console.log(this.control);
  }
}
