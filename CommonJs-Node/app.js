//将其他模块聚集在主模块
let unip = require('uniq');

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');

module1.foo();
module2();
module3.foo();
module3.bar();

let result = unip(module3.arr);
console.log(result);