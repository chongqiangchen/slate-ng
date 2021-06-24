const fs = require('fs-extra');
const path = require('path');

const cssPath = path.resolve(__dirname, '../projects/slate-ng-element-table/src/table.css');
const dist = path.resolve(__dirname, '../dist/slate-ng-element-table/table.css');

try {
  fs.createFileSync(dist);
  fs.copySync(cssPath, dist);
  console.log('copy table css to dist')
} catch(e) {
  console.error(e);
}
