import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonToggleModule } from '@nikolay_ua_mk/button-toggle';
import { InputFieldModule } from '@nikolay_ui_mk/input-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ButtonToggleModule,
    InputFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
