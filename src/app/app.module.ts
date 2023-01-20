import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TwoThumbSliderComponent } from './two-thumb-slider/two-thumb-slider.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TwoThumbSliderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
