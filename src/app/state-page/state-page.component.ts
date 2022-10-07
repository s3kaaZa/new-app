import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../services/data.service";
import { NameAndCountryFormComponent } from "../name-and-country-form/name-and-country-form.component";
import { OptionsAndEmailFormComponent } from "../options-and-email-form/options-and-email-form.component";
import { ZipCodeFormComponent } from "../zip-code-form/zip-code-form.component";
import { IUser, IUserViewModel } from "../models/user.model";
import { DataTransformService } from "../services/data-transform.service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-state-page',
  templateUrl: './state-page.component.html',
  styleUrls: ['./state-page.component.scss']
})
export class StatePageComponent implements OnInit {
  @ViewChild(NameAndCountryFormComponent, {static: false}) nameAndCountryForm!: NameAndCountryFormComponent;
  @ViewChild(OptionsAndEmailFormComponent, {static: false}) optionsAndEmailForm!: OptionsAndEmailFormComponent;
  @ViewChild(ZipCodeFormComponent, {static: false}) zipCodeForm!: ZipCodeFormComponent;
  IsHiddenNamesForm: boolean = false;
  IsHiddenOptionForm: boolean = false;
  IsHiddenZipCodeForm: boolean = true;
  UserName: string | undefined = '';
  UserSurname: string | undefined = '';
  UserCountry: string | undefined = '';
  UserOption: string | undefined = '';
  UserEmail: string | undefined = '';
  UserZipCode: number | undefined;

  constructor(
    private dataService: DataService,
    private dataTransformService: DataTransformService
  ) { }

  ngOnInit(): void {
  }

  ShowForms(key: number) {
    if (key === 1) {
      this.IsHiddenNamesForm = false;
      this.IsHiddenOptionForm = false;
      this.IsHiddenZipCodeForm = true;
    }
    if (key === 2) {
      this.IsHiddenNamesForm = true;
      this.IsHiddenOptionForm = true;
      this.IsHiddenZipCodeForm = false;
    }
  }
  SaveData() {
    const allFormsList = [
      this.nameAndCountryForm.NamesAndCountryForm,
      this.optionsAndEmailForm.EmailAndOptionsForm,
      this.zipCodeForm.ZipCodeForm
    ];
    if (this.nameAndCountryForm.NamesAndCountryForm.valid && this.optionsAndEmailForm.EmailAndOptionsForm.valid && this.zipCodeForm.ZipCodeForm.valid) {
      const user: IUserViewModel = {
        ...this.nameAndCountryForm.NamesAndCountryForm.value,
        ...this.optionsAndEmailForm.EmailAndOptionsForm.value,
        ...this.zipCodeForm.ZipCodeForm.value
      };
      const userRaw: IUser = this.dataTransformService.UserDataFromViewModel(user);
      this.dataService.SaveData(userRaw);
      this.clearForms(allFormsList);
      this.setPreviewVars(user);
    } else {
      this.markFormsAsTouched(allFormsList);
    }
  }
  private setPreviewVars(user: IUserViewModel) {
    this.UserName = user.Name;
    this.UserSurname = user.Surname;
    this.UserCountry = user.Country;
    this.UserOption = user.Option;
    this.UserEmail = user.Email;
    this.UserZipCode = user.ZipCode;
  }
  private markFormsAsTouched(forms: FormGroup[]): void {
    forms.forEach((form: FormGroup) => form.markAllAsTouched());
  }
  private clearForms(forms: FormGroup[]) {
    forms.forEach((form: FormGroup) => form.reset());
  }
}
