import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLeafComponent } from './custom-leaf.component';

describe('CustomLeafComponent', () => {
  let component: CustomLeafComponent;
  let fixture: ComponentFixture<CustomLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLeafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
