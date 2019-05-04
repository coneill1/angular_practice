import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FaInputComponent } from './form-field/fa-input/fa-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    FaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
