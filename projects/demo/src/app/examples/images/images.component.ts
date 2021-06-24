import { Component, OnInit } from '@angular/core';
import {createEditor} from 'slate';
import {NsDepsService, NsEditorService, RegistryNsElement, withAngular} from 'slate-ng';
import {withHistory} from 'slate-history';
import {withImages} from './utils';
import {ImageElementComponent} from './image-element.component';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class ImagesComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.',
        },
      ],
    },
    {
      type: 'image',
      url: 'https://source.unsplash.com/kFrdX5IeQzI',
      children: [{ text: '' }],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!',
        },
      ],
    },
  ];
  editor = withImages(withHistory(withAngular(createEditor())));

  constructor(
    private registry: RegistryNsElement,
  ) { }

  ngOnInit(): void {
    this.registry.add([ImageElementComponent]);
  }

}
