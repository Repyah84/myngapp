# modules-ui-button-toggle

# 1 Instal npm

    npm i @nikolay_ua_mk/my-button-toggle

# 2 Import ButtonToggleModule in your environment

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ButtonToggleModule } from '@nikorg/my-button-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ButtonToggleModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

# 3 Use

```js
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
```
