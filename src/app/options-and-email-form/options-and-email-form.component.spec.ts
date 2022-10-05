import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsAndEmailFormComponent } from './options-and-email-form.component';

describe('OptionsAndEmailFormComponent', () => {
  let component: OptionsAndEmailFormComponent;
  let fixture: ComponentFixture<OptionsAndEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsAndEmailFormComponent ]
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
