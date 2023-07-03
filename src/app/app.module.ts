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
