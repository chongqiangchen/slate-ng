import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcedLayoutComponent } from './forced-layout.component';

describe('ForcedLayoutComponent', () => {
  let component: ForcedLayoutComponent;
  let fixture: ComponentFixture<ForcedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcedLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
