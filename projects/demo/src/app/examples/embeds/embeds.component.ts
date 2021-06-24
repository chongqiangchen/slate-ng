import { Component, OnInit } from '@angular/core';
import { RegistryNsElement, NsEditorService, withAngular, NsDepsService } from 'slate-ng';
import { createEditor } from 'slate';
import { VideoElementComponent } from './video-element/video-element.component';


const withEmbeds = editor => {
  const { isVoid } = editor;
  editor.isVoid = element => (element.type === 'video' ? true : isVoid(element));
  return editor;
};


@Component({
  selector: 'app-embeds',
  templateUrl: './embeds.component.html',
  styleUrls: ['./embeds.component.less'],
  providers: [NsDepsService, RegistryNsElement, NsEditorService]
})
export class EmbedsComponent implements OnInit {
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'In addition to simple image nodes, you can actually create complex embedded nodes. For example, this one contains an input element that lets you change the video being rendered!',
        },
      ],
    },
    {
      type: 'video',
      url: 'https://player.vimeo.com/video/26689853?title=0&byline=0&portrait=0',
      children: [{ text: '' }],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'Try it out! This editor is built to handle Vimeo embeds, but you could handle any type.',
        },
      ],
    },
  ];
  editor = withEmbeds(withAngular(createEditor()));

  constructor(
    private customElement: RegistryNsElement
  ) { }

  ngOnInit(): void {
    this.customElement.add([VideoElementComponent]);
  }

}
