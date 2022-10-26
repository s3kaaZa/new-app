import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { DataService } from "@main/app/modules/user-settings/services/data.service";
import { NameAndCountryFormComponent } from "@main/app/modules/user-settings/user-settings/components/name-and-country-form/name-and-country-form.component";
import { OptionsAndEmailFormComponent } from "@main/app/modules/user-settings/user-settings/components/options-and-email-form/options-and-email-form.component";
import { ZipCodeFormComponent } from "@main/app/modules/user-settings/user-settings/components/zip-code-form/zip-code-form.component";
import { IUserViewModel } from "@main/app/modules/user-settings/models/user.model";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  @ViewChild(NameAndCountryFormComponent, {static: false}) nameAndCountryForm!: NameAndCountryFormComponent;
  @ViewChild(OptionsAndEmailFormComponent, {static: false}) optionsAndEmailForm!: OptionsAndEmailFormComponent;
  @ViewChild(ZipCodeFormComponent, {static: false}) zipCodeForm!: ZipCodeFormComponent;
  User: IUserViewModel | null = null;
  HideFirstTab = false;
  HideSecondTab = true;
  private isFormsValid = false;

  constructor(
    private readonly dataService: DataService,
  ) { }
  ngOnInit(): void {
    this.User = this.dataService.GetData();
  }
  ShowTab(key: any): void {
    if (key === 1) {
      this.HideFirstTab = false;
      this.HideSecondTab = true;
    } else if (key === 2) {
      this.HideFirstTab = true;
      this.HideSecondTab = false;
    }
  }
  SaveData(): void {
    const formsList: FormGroup[] = [
      this.nameAndCountryForm.NamesAndCountryForm,
      this.optionsAndEmailForm.OptionsAndEmailForm,
      this.zipCodeForm.ZipCodeForm
    ];
    this.isFormsValid = this.nameAndCountryForm.NamesAndCountryForm.valid &&
      this.optionsAndEmailForm.OptionsAndEmailForm.valid &&
      this.zipCodeForm.ZipCodeForm.valid;
    if (this.isFormsValid) {
      const user: IUserViewModel = {
        ...this.nameAndCountryForm.NamesAndCountryForm.value,
        ...this.optionsAndEmailForm.OptionsAndEmailForm.value,
        ...this.zipCodeForm.ZipCodeForm.value
      };
      this.dataService.SaveData(user);
      this.clearForms(formsList);
      this.User = user;
    } else {
      this.markFormsAsTouched(formsList);
    }
  }
  private clearForms(forms: FormGroup[]): void {
    forms.forEach((form: FormGroup) => form.reset());
  }
  private markFormsAsTouched(forms: FormGroup[]): void {
    forms.forEach((form: FormGroup) => form.markAllAsTouched());
  }
}
