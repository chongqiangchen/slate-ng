import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownShortcutsComponent } from './markdown-shortcuts.component';

describe('MarkdownShortcutsComponent', () => {
  let component: MarkdownShortcutsComponent;
  let fixture: ComponentFixture<MarkdownShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownShortcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
