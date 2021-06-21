import { TestBed } from '@angular/core/testing';
import { RegistryNsElement } from "./registry-ns-element.service";


describe('CustomElementService', () => {
  let service: RegistryNsElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistryNsElement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
