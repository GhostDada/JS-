//浏览器打开需要先编译打包 利用browserify
//利用require引入其他模块化文件
let module1=require('./module1');
let module2=require('./module2');
let module3=require('./module3');

//调用模块化
module1.foo();
module2();

module3.foo();
module3.bar();