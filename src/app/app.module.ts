import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { ButtonToggleModule } from '@nikolay_ua_mk/button-toggle';

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
