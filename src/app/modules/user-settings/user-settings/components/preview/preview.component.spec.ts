import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviewComponent } from '@main/app/modules/user-settings/user-settings/components/preview/preview.component';

describe('PreviewPageComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
