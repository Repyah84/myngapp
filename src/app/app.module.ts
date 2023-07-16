import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonToggleModule } from '@nikolay_ua_mk/button-toggle';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonToggleModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
