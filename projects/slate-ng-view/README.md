# SlateNgView

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.4.

> Doc will be supplemented...

### Quick Start：

1. install: `npm install slate-ng slate slate-history @angular/cdk`
2. import module: `SlateNgModule`
3. use `ns-editor`, ex: 
```
// html
<div
  ns-editor
  [editor]="editor"
  [value]="value"
  placeholder="enter some"
></div>

// ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [NsEditorService, NsDepsService, RegistryNsElement]
})
export class AppComponent {
  editor = withAngular(createEditor());
  value = [
    {
      type: 'paragraph',
      children: [{text: ''}]
    }
  ]
}
```

> If you want to know more usage, you can refer to [slate-ng demo](https://github.com/chongqiangchen/slate-ng/tree/master)

