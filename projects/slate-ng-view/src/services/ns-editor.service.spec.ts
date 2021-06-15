import { TestBed } from '@angular/core/testing';
import { NsEditorService } from "./ns-editor.service";


describe('EditorService', () => {
  let service: NsEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NsEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
