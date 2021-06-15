import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafChildComponent } from './leaf-child.component';

describe('LeafChildComponent', () => {
  let component: LeafChildComponent;
  let fixture: ComponentFixture<LeafChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
