### 重点
```
1. 第三章 变量的解构赋值
2. 8.5 箭头函数
   2.1 注意事项:
       1.函数体内的this就是定义时所在的对象,而不是使用时所在的对象
       2.不可以当作构造函数,即不可以使用new(箭头函数没有自己的this)
       3.不可以使用arguments对象
       4.不可以使用yield命令
     
3. 第18章 Class
4. 第20章 Module
```
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
``` 
3.字符串扩展
```javascript
     {
      let str="string";
      console.log('includes',str.includes("c"));  //字符串中是否包含某字符
      console.log('start',str.startsWith('str')); //字符串以某些字符起
      console.log('end',str.endsWith('ng'));      //字符串以某些字符结尾
     } 
     
     {
        let str="abc";
        console.log(str.repeat(2)); //重复     
      }

      {
        let name="list";
        let info="hello world";
        let m=`i am ${name},${info}`;  //模板字符串
        console.log(m);
      }
      
      {
         console.log('1'.padStart(2,'0'));  // String.prototype.padStart(maxLength, fillString='')
         console.log('1'.padEnd(2,'0'));    
       }
```
  标签模板作用：emmm    
4.数值扩展
```javascript
   4.1 进制
       {
         console.log('B',0B111110111); //二进制   503
         console.log(0o767);           //八进制   503
       }
     
    4.2 是否为整数
       {
         console.log('25',Number.isInteger(25));       // true
         console.log('25.0',Number.isInteger(25.0));   // true
         console.log('25.1',Number.isInteger(25.1));   // false
         console.log('25.1',Number.isInteger('25'));   // false
       }
     4.3 返回整数部分
       {
         console.log(4.1,Math.trunc(4.1));             // 4
         console.log(4.9,Math.trunc(4.9));             // 4
       }
     4.4 立方根
       {
          console.log('-1',Math.cbrt(-1));             // -1
          console.log('8',Math.cbrt(8));               // 2
        }

```
  5. 数组扩展
  ```javascript
     5.1 Array.of 将一组数据变量转化为数据类型
         {
           let arr = Array.of(3,4,7,9,11);             
           console.log('arr=',arr);                     // arr= [3,4,7,9,11]

           let empty=Array.of();
           console.log('empty',empty);                  // empty = []
         }
      5.2 Array.from 
         {
            let p=document.querySelectorAll('p');
            let pArr=Array.from(p);
            pArr.forEach(function(item){
              console.log(item.textContent);
            });

          console.log(Array.from([1,3,5],function(item){return item*2})); //[2,6,10]
        }
       5.3 填充数组 fill
          {
             console.log( [1,'a',undefined].fill(7) );          // [7,7,7]
             console.log( ['a','b','c'].fill(7,1,3) );          // ['a',7,7 ]
           }


  ```
  6. ... 展开运算符
  
  ```
  展开运算符（spread operator）允许一个表达式在某处展开。
  展开运算符在多个参数（用于函数调用）或多个元素（用于数组字面量）或者多个变量（用于解构赋值）的地方可以使用。
  ---待补充
  ```
   7.  Set与Map数据结构
   ```js
    map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
    callback
    生成新数组元素的函数，使用三个参数：
    currentValue
    callback 的第一个参数，数组中正在处理的当前元素。
    index
    callback 的第二个参数，数组中正在处理的当前元素的索引。
    array
    callback 的第三个参数，map 方法被调用的数组。
    
    // 下面的语句返回什么呢:
    ["1", "2", "3"].map(parseInt);
    // 你可能觉的会是[1, 2, 3]
    // 但实际的结果是 [1, NaN, NaN]

    // 通常使用parseInt时,只需要传递一个参数.
    // 但实际上,parseInt可以有两个参数.第二个参数是进制数.
    // 可以通过语句"alert(parseInt.length)===2"来验证.
    // map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 
    // 元素索引, 原数组本身.
    // 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
    // parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.

    function returnInt(element) {
      return parseInt(element, 10);
    }

    ['1', '2', '3'].map(returnInt); // [1, 2, 3]
    // 意料之中的结果

    // 也可以使用简单的箭头函数，结果同上
    ['1', '2', '3'].map( str => parseInt(str) );

    // 一个更简单的方式:
    ['1', '2', '3'].map(Number); // [1, 2, 3]
    // 与`parseInt` 不同，下面的结果会返回浮点数或指数:
    ['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
 ```
