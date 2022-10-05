import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndCountryFormComponent } from './name-and-country-form.component';

describe('NameAndCountryFormComponent', () => {
  let component: NameAndCountryFormComponent;
  let fixture: ComponentFixture<NameAndCountryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAndCountryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameAndCountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
