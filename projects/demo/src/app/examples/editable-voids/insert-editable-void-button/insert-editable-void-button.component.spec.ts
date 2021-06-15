import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEditableVoidButtonComponent } from './insert-editable-void-button.component';

describe('InsertEditableVoidButtonComponent', () => {
  let component: InsertEditableVoidButtonComponent;
  let fixture: ComponentFixture<InsertEditableVoidButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEditableVoidButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEditableVoidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
