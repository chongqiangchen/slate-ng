import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHighlightingComponent } from './code-highlighting.component';

describe('CodeHighlightingComponent', () => {
  let component: CodeHighlightingComponent;
  let fixture: ComponentFixture<CodeHighlightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeHighlightingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeHighlightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
