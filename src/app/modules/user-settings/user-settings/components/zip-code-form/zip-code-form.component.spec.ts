import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeFormComponent } from '@main/app/modules/user-settings/user-settings/components/zip-code-form/zip-code-form.component';
import { FormBuilder} from "@angular/forms";

describe('ZipCodeFormComponent', () => {
  let component: ZipCodeFormComponent;
  let fixture: ComponentFixture<ZipCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipCodeFormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
