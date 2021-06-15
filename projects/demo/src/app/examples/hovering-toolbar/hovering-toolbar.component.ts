import { ChangeDetectorRef, Component, ElementRef, InjectionToken, Injector, OnInit, ViewChild } from '@angular/core';
import { createEditor, Descendant, Editor, Text, Transforms } from 'slate';
import { NsDepsService, NsEditorService, RegistryNsElement, withAngular } from 'slate-ng-view';
import { CustomLeafComponent } from '../rich-text/custom-leaf/custom-leaf.component';
import { withHistory } from 'slate-history';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PortalComponent } from './portal/portal.component';

const EDITOR_TOKEN = new InjectionToken('editor_token');

@Component({
  selector: 'app-hovering-toolbar',
  templateUrl: './hovering-toolbar.component.html',
  styleUrls: ['./hovering-toolbar.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class HoveringToolbarComponent implements OnInit {

  constructor(
    private editorService: NsEditorService,
    private registryNsElement: RegistryNsElement,
    private overlay: Overlay,
    private cdr: ChangeDetectorRef,
    private injector: Injector
  ) {
  }
  @ViewChild('nsEditor', { read: ElementRef }) nsEditor: ElementRef;
  initialValue: any[] = [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'This example shows how you can make a hovering menu appear above your content, which you can use to make text '
        },
        { text: 'bold', bold: true },
        { text: ', ' },
        { text: 'italic', italic: true },
        { text: ', or anything else you might want to do!' }
      ]
    },
    {
      type: 'paragraph',
      children: [
        { text: 'Try it out yourself! Just ' },
        { text: 'select any piece of text and the menu will appear', bold: true },
        { text: '.' }
      ]
    }
  ];
  editor = withHistory(withAngular(createEditor()));
  overlayRef: OverlayRef;

  handleOnBeforeInput = (event: InputEvent) => {
    event.preventDefault();
    switch (event.inputType) {
      case 'formatBold':
        return this.toggleFormat('bold');
      case 'formatItalic':
        return this.toggleFormat('italic');
      case 'formatUnderline':
        return this.toggleFormat('underlined');
    }
  }

  ngOnInit(): void {
    this.registryNsElement.add([CustomLeafComponent]);
  }

  show = ($event: Event) => {
    const domSelection = window.getSelection();
    if (domSelection.isCollapsed) {
      this.hide();
      return;
    }
    this.hide();
    this.showToolbar();
  }

  hide() {
    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
    }
  }

  private showToolbar() {
    const overlayRef = this.overlay.create({ positionStrategy: this.getPosition(), hasBackdrop: false });
    this.overlayRef = overlayRef;
    const comPortal = new ComponentPortal(PortalComponent, null, Injector.create([], this.injector));
    overlayRef.attach(comPortal);
  }

  private getPosition() {
    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    return this.overlay.position()
      .connectedTo(this.nsEditor,
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' })
      .withOffsetX(rect.x)
      .withOffsetY(rect.y);
  }

  private toggleFormat(format) {
    const isActive = this.isFormatActive(this.editorService.editor, format);
    Transforms.setNodes(
      this.editorService.editor,
      { [format]: isActive ? null : true },
      { match: Text.isText, split: true }
    );
  }

  private isFormatActive(editor, format) {
    const [match] = Editor.nodes(editor, {
      match: n => n[format] === true,
      mode: 'all'
    });
    return !!match;
  }

}

