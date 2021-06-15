import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoveringToolbarComponent } from './hovering-toolbar.component';

describe('HoveringToolbarComponent', () => {
  let component: HoveringToolbarComponent;
  let fixture: ComponentFixture<HoveringToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoveringToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoveringToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
