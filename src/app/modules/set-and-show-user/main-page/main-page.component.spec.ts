import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { NameAndCountryFormComponent } from "../name-and-country-form/name-and-country-form.component";
import { OptionsAndEmailFormComponent } from "../options-and-email-form/options-and-email-form.component";
import { ZipCodeFormComponent } from "../zip-code-form/zip-code-form.component";
import { FormBuilder } from "@angular/forms";
import { DataService } from "../services/data.service";

describe('MainPageComponent', () => {
  const dataServiceSpy = jasmine.createSpyObj<DataService>('DataService', ['GetData']);
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        NameAndCountryFormComponent,
        OptionsAndEmailFormComponent,
        ZipCodeFormComponent
      ],
      providers: [
        FormBuilder,
        {
          provider: DataService,
          useValue: dataServiceSpy
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.nameAndCountryForm.NamesAndCountryForm.valid).toBeFalsy();
    expect(component.optionsAndEmailForm.OptionsAndEmailForm.valid).toBeFalsy();
    expect(component.zipCodeForm.ZipCodeForm.valid).toBeFalsy();
  });

  it('#firstButton / #secondButton click should call ShowForms with 1 / 2)', fakeAsync(() => {
    spyOn(component, 'ShowForms');
    const firstButton = fixture.debugElement.nativeElement.querySelector('#firstButton');
    const secondButton = fixture.debugElement.nativeElement.querySelector('#secondButton');
    firstButton.click();
    tick();
    expect(component.ShowForms).toHaveBeenCalledWith(1);
    secondButton.click();
    tick();
    expect(component.ShowForms).toHaveBeenCalledWith(2);
  }));

  it('ShowForms should set VisibleForms as 1 or 2', () => {
    component.ShowForms(1);
    expect(component.VisibleForms).toEqual(1);
    component.ShowForms(2);
    expect(component.VisibleForms).toEqual(2);
  });

  it('SaveData should make all forms touched', () => {
    component.SaveData()
    expect(component.nameAndCountryForm.NamesAndCountryForm.touched).toBeTrue();
    expect(component.optionsAndEmailForm.OptionsAndEmailForm.touched).toBeTrue();
    expect(component.zipCodeForm.ZipCodeForm.touched).toBeTrue();
  });

  it('SaveData should call SetPreviewControlsValue', () => {
    spyOn(component, 'SetPreviewControlsValue');
    component.nameAndCountryForm.NamesAndCountryForm.patchValue({Name: 'string', Surname: 'string', Country: 'string'});
    component.optionsAndEmailForm.OptionsAndEmailForm.patchValue({Option: 'string', Email: 'string@string.com'});
    component.zipCodeForm.ZipCodeForm.patchValue({ZipCode: 12345});
    component.SaveData();
    expect(component.SetPreviewControlsValue).toHaveBeenCalled();
  });

  it('private clearForms should clear all forms', () => {
    component.nameAndCountryForm.NamesAndCountryForm.patchValue({Name: 'string', Surname: 'string', Country: 'string'});
    component.optionsAndEmailForm.OptionsAndEmailForm.patchValue({Option: 'string', Email: 'string@string.com'});
    component.zipCodeForm.ZipCodeForm.patchValue({ZipCode: 12345});
    component['clearForms']([
      component.nameAndCountryForm.NamesAndCountryForm,
      component.optionsAndEmailForm.OptionsAndEmailForm,
      component.zipCodeForm.ZipCodeForm
    ]);
    expect(component.nameAndCountryForm.NamesAndCountryForm.value).toEqual({Name: null, Surname: null, Country: null});
    expect(component.optionsAndEmailForm.OptionsAndEmailForm.value).toEqual({Option: null, Email: null});
    expect(component.zipCodeForm.ZipCodeForm.value).toEqual({ZipCode: null});
  });

  it('private setPreviewVars should set preview variables', () => {
    component['SetPreviewControlsValue']({
      Name: 'string',
      Surname: 'string',
      Country: 'string',
      Option: 'string',
      Email: 'string@string.com',
      ZipCode: 12345
    });
    expect(component.UserName).toEqual('string');
    expect(component.UserSurname).toEqual('string');
    expect(component.UserCountry).toEqual('string');
    expect(component.UserOption).toEqual('string');
    expect(component.UserEmail).toEqual('string@string.com');
    expect(component.UserZipCode).toEqual(12345);
  });

  it('private markFormsAsTouched should clear all controls', () => {
    component['markFormsAsTouched']([
      component.nameAndCountryForm.NamesAndCountryForm,
      component.optionsAndEmailForm.OptionsAndEmailForm,
      component.zipCodeForm.ZipCodeForm
    ]);
    expect(component.nameAndCountryForm.NamesAndCountryForm.touched).toBeTrue();
    expect(component.optionsAndEmailForm.OptionsAndEmailForm.touched).toBeTrue();
    expect(component.zipCodeForm.ZipCodeForm.touched).toBeTrue();
  });
});
