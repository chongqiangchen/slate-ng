import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorValueComponent } from './editor-value.component';

describe('EditorValueComponent', () => {
  let component: EditorValueComponent;
  let fixture: ComponentFixture<EditorValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
