import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {Editor, Element, Node, Path, Text} from 'slate';
import {AngularEditor} from '../../../plugins/angular-editor';
import {NsEditorService} from '../../../services/ns-editor.service';

@Component({
  selector: 'ns-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class StringComponent implements OnInit, AfterViewInit {
  @Input() isLast: boolean;
  @Input() leaf: Text;
  @Input() pNode: Element;
  @Input() cNode: Text;

  @ViewChild('ZeroWidthString') ZeroWidthStringTmpl: TemplateRef<any>;
  @ViewChild('TextString') TextStringTmpl: TemplateRef<any>;

  template: TemplateRef<any>;
  context: object;

  constructor(
    private editorService: NsEditorService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const editor = this.editorService.editor;
    const path = AngularEditor.findPath(editor, this.cNode);
    const parentPath = Path.parent(path);
    if (editor.isVoid(this.pNode)) {
      this.template = this.ZeroWidthStringTmpl;
      this.context = {
        length: Node.string(this.pNode).length,
        isLineBreak: false
      };
    }

    if (
      this.leaf.text === '' &&
      this.pNode.children[this.pNode.children.length - 1] === this.cNode &&
      !editor.isInline(this.pNode) &&
      Editor.string(editor, parentPath) === ''
    ) {
      this.template = this.ZeroWidthStringTmpl;
      this.context = {
        length: 0,
        isLineBreak: true
      };
    }

    if (this.leaf.text === '') {
      this.template = this.ZeroWidthStringTmpl;
      this.context = {
        length: 0,
        isLineBreak: false
      };
    }

    if (this.isLast && this.leaf.text.slice(-1) === '\n') {
      console.log(11)
      this.template = this.TextStringTmpl;
      this.context = {
        isTrailing: true,
        text: this.leaf.text
      };
    }

    if (!this.template) {
      this.template = this.TextStringTmpl;
      this.context = {
        isTrailing: false,
        text: this.leaf.text
      };
    }
    this.cdr.detectChanges();
  }

}
