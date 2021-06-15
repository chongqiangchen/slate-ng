import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafItemComponent } from './leaf-item.component';

describe('LeafItemComponent', () => {
  let component: LeafItemComponent;
  let fixture: ComponentFixture<LeafItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
