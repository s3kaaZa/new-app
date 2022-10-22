import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingPageComponent } from './greeting/greeting-page/greeting-page.component';
import { NameAndCountryFormComponent } from './set-and-show-user/name-and-country-form/name-and-country-form.component';
import { OptionsAndEmailFormComponent } from './set-and-show-user/options-and-email-form/options-and-email-form.component';
import { ZipCodeFormComponent } from './set-and-show-user/zip-code-form/zip-code-form.component';
import { MainPageComponent } from './set-and-show-user/main-page/main-page.component';
import { PreviewComponent } from './set-and-show-user/preview/preview.component';
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
    GreetingPageComponent,
    NameAndCountryFormComponent,
    OptionsAndEmailFormComponent,
    ZipCodeFormComponent,
    MainPageComponent,
    PreviewComponent
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
