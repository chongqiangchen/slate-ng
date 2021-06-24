import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertImageButtonComponent } from './insert-image-button.component';

describe('InsertImageButtonComponent', () => {
  let component: InsertImageButtonComponent;
  let fixture: ComponentFixture<InsertImageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertImageButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
