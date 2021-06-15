import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListItemComponent } from './check-list-item.component';

describe('CheckListItemComponent', () => {
  let component: CheckListItemComponent;
  let fixture: ComponentFixture<CheckListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
