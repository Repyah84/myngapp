# ngn-button-toggle

Supported angular 16+.

This module is completely open to customize. Implement your template and style.

## 1 Instal npm

npm i @nikolay_ua_mk/button-toggle -D

## 2 Import ButtonToggleModule

```ts
...
import { ButtonToggleModule } from '@nikolay_ua_mk/button-toggle';

@NgModule({
  ...
  imports: [ButtonToggleModule],
})
export class AppModule {}
```

## 3 Use

### TS

```ts
  public btnToggleValue: unknown;

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
```

### HTML

```html
<ngn-button-toggle
  [value]="toggleValueList[1]"
  #buttonToggle="ngnButtonToggle"
  (buttonToggleValueChange)="btnToggleValue = $event"
>
  <ng-container *ngFor="let toggle of toggleValueList">
    <ng-template ngnToggle [ngnToggleValue]="toggle" let-isToggle="isToggle">
      <button [class.btn-toggle--toggled]="isToggle" class="btn-toggle">
        {{ toggle.value }}
      </button>
    </ng-template>
  </ng-container>
</ngn-button-toggle>

<div>{{ buttonToggle.value?.value }}</div>

<div>
  <span>button toggle change: {{ (btnToggleValue | json) || 'no event' }}</span>
</div>
```

### CSS

```css
.btn-toggle--toggled {
  background-color: aquamarine;
}
```
