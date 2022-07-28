//引入其他模块文件 import xxx from "路径"
import $ from 'jquery';
import {foo ,bar } from './module1';
import {fun ,fun2 } from './module2';
import module3 from './module3';

// console.log(module1); undifend
// console.log(module2); undifend

foo();
bar();
fun();
fun2();
// console.log(module3);
module3.foo();

$('body').css('background','green');