import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedsComponent } from './embeds.component';

describe('EmbedsComponent', () => {
  let component: EmbedsComponent;
  let fixture: ComponentFixture<EmbedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
