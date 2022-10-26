import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { UserSettingsComponent } from "@main/app/modules/user-settings/user-settings/user-settings.component";
import { NameAndCountryFormComponent } from "@main/app/modules/user-settings/user-settings/components/name-and-country-form/name-and-country-form.component";
import { OptionsAndEmailFormComponent } from "@main/app/modules/user-settings/user-settings/components/options-and-email-form/options-and-email-form.component";
import { ZipCodeFormComponent } from "@main/app/modules/user-settings/user-settings/components/zip-code-form/zip-code-form.component";
import { PreviewComponent } from "@main/app/modules/user-settings/user-settings/components/preview/preview.component";

@NgModule({
  declarations: [
    UserSettingsComponent,
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
export class UserSettingsModule { }
