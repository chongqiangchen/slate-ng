import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugeDocumentComponent } from './huge-document.component';

describe('HugeDocumentComponent', () => {
  let component: HugeDocumentComponent;
  let fixture: ComponentFixture<HugeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HugeDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HugeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
