import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableVoidsComponent } from './editable-voids.component';

describe('EditableVoidsComponent', () => {
  let component: EditableVoidsComponent;
  let fixture: ComponentFixture<EditableVoidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableVoidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableVoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
