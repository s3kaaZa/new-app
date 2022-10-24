import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from "./main-page/main-page.component";
import { NameAndCountryFormComponent } from "./name-and-country-form/name-and-country-form.component";
import { OptionsAndEmailFormComponent } from "./options-and-email-form/options-and-email-form.component";
import { ZipCodeFormComponent } from "./zip-code-form/zip-code-form.component";
import { PreviewComponent } from "./preview/preview.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  declarations: [
    MainPageComponent,
    NameAndCountryFormComponent,
    OptionsAndEmailFormComponent,
    ZipCodeFormComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class SetAndShowUserModule { }
