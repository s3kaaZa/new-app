import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from "@angular/forms";

import { NameAndCountryFormComponent } from '@main/app/modules/user-settings/user-settings/components/name-and-country-form/name-and-country-form.component';

describe('NameAndCountryFormComponent', () => {
  let component: NameAndCountryFormComponent;
  let fixture: ComponentFixture<NameAndCountryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAndCountryFormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameAndCountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show two inputs (Name, Surname) and a dropdown list with three options (Belarus, Poland, Ukraine)', () => {
    const expectedInputsControlNames = ['Name', 'Surname'];
    const expectedDropdownControlName = 'Country';
    const expectedDropdownLabel = 'Select country';
    const expectedDropdownOptions = ['Belarus', 'Poland', 'Ukraine'];
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const formInputs = el.querySelectorAll('input');
    const formDropdown = el.querySelector('mat-select');
    const formDropdownLabel = el.querySelector('.select_country_dropdown mat-label');
    const formDropdownOptions = el.querySelectorAll('mat-select mat-option');
    expect(formInputs[0]).toBeDefined();
    expect(formInputs[1]).toBeDefined();
    expect(formDropdown).toBeDefined();
    expect(formInputs[0].getAttribute('formControlName')).toBe(expectedInputsControlNames[0]);
    expect(formInputs[1].getAttribute('formControlName')).toBe(expectedInputsControlNames[1]);
    expect(formDropdown?.getAttribute('formControlName')).toBe(expectedDropdownControlName);
    expect(formDropdownLabel?.outerHTML).toContain(expectedDropdownLabel);
    expect(formDropdownOptions[0].getAttribute('value')).toBe(expectedDropdownOptions[0]);
    expect(formDropdownOptions[1].getAttribute('value')).toBe(expectedDropdownOptions[1]);
    expect(formDropdownOptions[2].getAttribute('value')).toBe(expectedDropdownOptions[2]);
    expect(formDropdownOptions[3]).toBeUndefined();
  });
});
