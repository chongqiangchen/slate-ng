# Slate Ng

[中文文档](https://chongqiangchen.github.io/slate-ng-doc/zh/) | [English Doc](https://chongqiangchen.github.io/slate-ng-doc/en/)

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

