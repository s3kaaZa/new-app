import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('#greeting should show a greeting', () => {
    const greetingEl: HTMLElement = fixture.debugElement.nativeElement;
    const greeting = greetingEl.querySelector('#greeting');
    expect(greeting?.textContent).toContain('Hi there!');
  });

  it('should show a link with routerLink equal to /state-page', () => {
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const link = el.querySelector('a');
    expect(link).toBeDefined();
    expect(link?.getAttribute('routerLink')).toEqual('/state-page');
  });
});
