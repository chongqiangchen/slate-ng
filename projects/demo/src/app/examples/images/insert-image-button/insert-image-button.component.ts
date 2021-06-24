import { Component, OnInit } from '@angular/core';
import {insertImage, isImageUrl} from '../utils';
import {NsEditorService} from 'slate-ng';

@Component({
  selector: 'app-insert-image-button',
  templateUrl: './insert-image-button.component.html',
  styleUrls: ['./insert-image-button.component.less']
})
export class InsertImageButtonComponent implements OnInit {

  constructor(
    private editorService: NsEditorService,
  ) { }

  ngOnInit(): void {
  }

  handle(event: any) {
    event.preventDefault();
    const url = window.prompt('Enter the URL of the image:');
    if (url && !isImageUrl(url)) {
      alert('URL is not an image');
      return;
    }
    insertImage(this.editorService.editor, url);
  }
}
