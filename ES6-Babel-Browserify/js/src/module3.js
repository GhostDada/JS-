//默认暴露 暴露什么数据类型 输出就是什么类型
//语法 export default value
// export default ()=>{
//     console.log('我是默认暴露的函数');
// }

//对象是用来管理数据的
export default {
    msg:'默认暴露',
    foo(){
        console.log(this.msg);
    }
}