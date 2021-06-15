import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
  ElementRef, AfterViewInit, ComponentFactoryResolver, ApplicationRef, Injector, ViewContainerRef
} from '@angular/core';
import { EditableComponent } from 'slate-ng-view';
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-iframe-container',
  templateUrl: './iframe-container.component.html',
  styleUrls: ['./iframe-container.component.less']
})
export class IframeContainerComponent implements OnInit, AfterViewInit {
  @Input() templateRef: TemplateRef<any>;
  @Input() containerRef: ViewContainerRef;
  @Input() tmplContext: any;
  @Output() onBlur = new EventEmitter();

  @ViewChild('iframe') iframeRef: ElementRef<HTMLIFrameElement>;

  portalOutlet = null;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.show();
  }

  hide() {
    this.portalOutlet.detach();
  }

  show() {
    const body = this.iframeRef.nativeElement.contentDocument.body;
    const portalOutlet = new DomPortalOutlet(body, this._componentFactoryResolver, this._appRef, this.injector, document);
    this.portalOutlet = portalOutlet;
    const portal = new TemplatePortal(this.templateRef, this.viewContainerRef, this.tmplContext);
    portalOutlet.attachTemplatePortal(portal);
  }

}
