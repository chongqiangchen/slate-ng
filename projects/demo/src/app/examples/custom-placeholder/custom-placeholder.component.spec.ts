import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPlaceholderComponent } from './custom-placeholder.component';

describe('CustomPlaceholderComponent', () => {
  let component: CustomPlaceholderComponent;
  let fixture: ComponentFixture<CustomPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
