import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from "@angular/forms";
import { OptionsAndEmailFormComponent } from '@main/app/modules/user-settings/user-settings/components/options-and-email-form/options-and-email-form.component';

describe('OptionsAndEmailFormComponent', () => {
  let component: OptionsAndEmailFormComponent;
  let fixture: ComponentFixture<OptionsAndEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsAndEmailFormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsAndEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
