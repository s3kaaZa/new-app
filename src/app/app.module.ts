import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NameAndCountryFormComponent } from './name-and-country-form/name-and-country-form.component';
import { OptionsAndEmailFormComponent } from './options-and-email-form/options-and-email-form.component';
import { ZipCodeFormComponent } from './zip-code-form/zip-code-form.component';
import { StatePageComponent } from './state-page/state-page.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NameAndCountryFormComponent,
    OptionsAndEmailFormComponent,
    ZipCodeFormComponent,
    StatePageComponent,
    PreviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
