### 笔试题

1.  考察this作用域

```javascript
var foo = {
	bar: '你好',
	func: function () {
		alert(this.bar);
	}
},
bar = foo.func;
bar();
/* 
 * 答案：function () { alert(this.bar) }
 * 把foo.func函数赋值给全局变量bar然后执行，这等价于执行全局函数。全局函数的this是指向window的，
 * 所以alert(this.bar)等于alert(window.bar)，也就是alert函数自身。
 */
 
```

2. this的指向问题
```javascript
var x = 20;
var temp = {
    x: 40,
    foo: function () {
        var x = 10;
        return this.x;
    }
};

console.log( temp.foo() );  			// 40 this对象为temp，this.x等于temp.x
console.log( (temp.foo)() ); 			// 40 
console.log( (temp.foo = temp.foo)() ); // 20   不懂
console.log( (temp.foo, temp.foo)() );	// 20   不懂
console.log( temp.foo.apply(window) );  // 20 apply使temp.foo的this对象为window上下文，this.x等于window.x
console.log( temp.foo.apply(temp) ); 	// 40 apply使temp.foo的this对象指向temp上下文，this.x等于temp.x

```

3. 

```javascript
var foo={n:1};
(function(foo){
   console.log(foo.n);
   foo.n=3;
   var foo={n:2};
   console.log(foo.n);
})(foo);
   console.log(foo.n);
   
```
4.
```javascript
function Foo(){
    var i =0;
    return function() {
        document.write(i++);
    }
}
var f1=Foo();
f1();
f1();
f2();
```
