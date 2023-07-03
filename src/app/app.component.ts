import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'myngapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'myngapp';

  public btnToggleValue: unknown;

  public readonly buttonToggleList = ['first', 'second', 'trd'];
}
