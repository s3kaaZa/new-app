import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingPageComponent } from './greeting-page.component';

describe('MainPageComponent', () => {
  let component: GreetingPageComponent;
  let fixture: ComponentFixture<GreetingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('#greeting should show a greeting', () => {
    const greetingEl: HTMLElement = fixture.debugElement.nativeElement;
    const greeting = greetingEl.querySelector('#greetingText');
    expect(greeting?.textContent).toContain('Hi there!');
  });

  it('should show a link with routerLink equal to /state-page', () => {
    const el: HTMLElement = fixture.debugElement.nativeElement;
    const link = el.querySelector('a');
    expect(link).toBeDefined();
    expect(link?.getAttribute('href')).toEqual('/state-page');
  });
});
