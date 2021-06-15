import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableVoidComponent } from './editable-void.component';

describe('EditableVoidComponent', () => {
  let component: EditableVoidComponent;
  let fixture: ComponentFixture<EditableVoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableVoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableVoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
