### gulp
自动化构建工具
stream  
### bable
### webpack

###
1. let const  
```
 1.1 let
     a. let声明的变量在自己的块作用域内有效  
        es6强制开启严格模式     
        变量未声明，不能引用 
     b. let不能重复声明
 1.2 const 
     a. const 声明的常量不能修改(引用类型除外）
     b. const 声明时必须赋值
```
2. 解构赋值
```javascript
    
    {
      let a,b;
      [a,b]=[1,2]  //a=1,b=2
    }
    {
      let a,b,rest
      [a,b,...rest]=[1,2,3,4,5,6] //a=1,b=2,rest=[3,4,5,6]
    }
    {
      let a,b;
      ({a,b}={a:1,b:2})  // a=1,b=2
    }
 
