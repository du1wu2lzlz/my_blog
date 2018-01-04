### 笔试题

1.  考察this作用域

```
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
