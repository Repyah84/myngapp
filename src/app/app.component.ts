import { ChangeDetectionStrategy, Component } from '@angular/core';
import { counter } from '@myngapp/modules/utils';

@Component({
  selector: 'myngapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'myngapp';

  public btnToggleValue: unknown;

  public counter = counter();

  public readonly buttonToggleList = ['first', 'second', 'trd'];

  public constructor() {
    setInterval(() => {
      console.log(this.counter());
    }, 2000);
  }
}
