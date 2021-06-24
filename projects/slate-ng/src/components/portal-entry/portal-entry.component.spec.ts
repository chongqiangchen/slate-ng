import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalEntryComponent } from './portal-entry.component';

describe('PortalEntryComponent', () => {
  let component: PortalEntryComponent;
  let fixture: ComponentFixture<PortalEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
