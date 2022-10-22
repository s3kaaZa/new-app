import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../services/data.service";
import { NameAndCountryFormComponent } from "../name-and-country-form/name-and-country-form.component";
import { OptionsAndEmailFormComponent } from "../options-and-email-form/options-and-email-form.component";
import { ZipCodeFormComponent } from "../zip-code-form/zip-code-form.component";
import { IUserViewModel } from "../models/user.model";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-state-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild(NameAndCountryFormComponent, {static: false}) nameAndCountryForm!: NameAndCountryFormComponent;
  @ViewChild(OptionsAndEmailFormComponent, {static: false}) optionsAndEmailForm!: OptionsAndEmailFormComponent;
  @ViewChild(ZipCodeFormComponent, {static: false}) zipCodeForm!: ZipCodeFormComponent;
  ShowFormsIndex = {
    isNameAndOptionForms: 1,
    isZipCodeForm: 2
  };
  VisibleForms: number = this.ShowFormsIndex.isNameAndOptionForms;
  UserName = '';
  UserSurname = '';
  UserCountry = '';
  UserOption = '';
  UserEmail = '';
  UserZipCode: number | undefined;
  private isFormsValid = false;

  constructor(
    private readonly dataService: DataService,
  ) { }
  ngOnInit(): void {
    const savedUser: IUserViewModel | null = this.dataService.GetData();
    if (savedUser) {
      this.setPreviewControlsValue(savedUser);
    }
  }
  ShowForms(key: any): void {
    this.VisibleForms = key;
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
      this.setPreviewControlsValue(user);
    } else {
      this.markFormsAsTouched(formsList);
    }
  }
  private clearForms(forms: FormGroup[]): void {
    forms.forEach((form: FormGroup) => form.reset());
  }
  private setPreviewControlsValue(user: IUserViewModel): void {
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
}
