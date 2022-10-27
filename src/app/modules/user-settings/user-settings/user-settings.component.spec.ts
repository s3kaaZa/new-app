import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder } from "@angular/forms";

import { UserSettingsComponent } from '@main/app/modules/user-settings/user-settings/user-settings.component';
import { NameAndCountryFormComponent } from "@main/app/modules/user-settings/user-settings/components/name-and-country-form/name-and-country-form.component";
import { OptionsAndEmailFormComponent } from "@main/app/modules/user-settings/user-settings/components/options-and-email-form/options-and-email-form.component";
import { ZipCodeFormComponent } from "@main/app/modules/user-settings/user-settings/components/zip-code-form/zip-code-form.component";
import { UserDataService } from "@main/app/modules/user-settings/services/user-data.service";

describe('UserSettingsComponent', () => {
  const userDataServiceSpy = jasmine.createSpyObj<UserDataService>('DataService', ['GetUser', 'SaveUser']);
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserSettingsComponent,
        NameAndCountryFormComponent,
        OptionsAndEmailFormComponent,
        ZipCodeFormComponent
      ],
      providers: [
        FormBuilder,
        {
          provider: UserDataService,
          useValue: userDataServiceSpy
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingsComponent);
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

  it('.primary_button / .secondary_button click should call ShowForms with 1 / 2)', fakeAsync(() => {
    spyOn(component, 'ShowTab');
    const firstButton = fixture.debugElement.nativeElement.querySelector('.primary_button');
    const secondButton = fixture.debugElement.nativeElement.querySelector('.secondary_button');
    firstButton.click();
    tick();
    expect(component.ShowTab).toHaveBeenCalledWith(1);
    secondButton.click();
    tick();
    expect(component.ShowTab).toHaveBeenCalledWith(2);
  }));

  it('ShowForms should set VisibleForms as 1 or 2', () => {
    component.ShowTab(1);
    expect(component.HideFirstTab).toBeFalse();
    expect(component.HideSecondTab).toBeTrue();
    component.ShowTab(2);
    expect(component.HideFirstTab).toBeTrue();
    expect(component.HideSecondTab).toBeFalse();
  });

  it('SaveData should make all forms touched when forms invalid', () => {
    component.SaveData()
    expect(component.nameAndCountryForm.NamesAndCountryForm.touched).toBeTrue();
    expect(component.optionsAndEmailForm.OptionsAndEmailForm.touched).toBeTrue();
    expect(component.zipCodeForm.ZipCodeForm.touched).toBeTrue();
  });

  it('SaveData should set User', () => {
    component.nameAndCountryForm.NamesAndCountryForm.patchValue({Name: 'string', Surname: 'string', Country: 'string'});
    component.optionsAndEmailForm.OptionsAndEmailForm.patchValue({Option: 'string', Email: 'string@string.com'});
    component.zipCodeForm.ZipCodeForm.patchValue({ZipCode: 12345});
    component.SaveData();
    expect(component.User).toEqual({
      Name: 'string',
      Surname: 'string',
      Country: 'string',
      Option: 'string',
      Email: 'string@string.com',
      ZipCode: 12345
    });
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
