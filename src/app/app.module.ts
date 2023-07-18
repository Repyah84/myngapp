import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonToggleModule } from '@nikolay_ua_mk/button-toggle';
import { InputFieldModule } from '@nikolay_ui_mk/input-field';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonToggleModule, InputFieldModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
