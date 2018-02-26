
## axios
axios的then中的this不是当前vue实例中的this 原因(https://stackoverflow.com/questions/40996344/axios-cant-set-data)
## 数据的双向绑定如何实现 (https://github.com/DMQ/mvvm)
## 虚拟DOM  
更新DOM是非常昂贵的操作，我们可以用JavaScript对象来代替DOM节点   
在浏览器中我们可以通过js来操作DOM，但是这样的操作性能很差，于是Virtual Dom应运而生。  
Virtual Dom可以理解为在js中模拟DOM对象树来优化DOM操作的一种技术或思路    
比如：  
DOM节点在HTML文档中的表现通常是这样的：  

```html
  <ul id='myId'>
    <li>Item 1</li>
    <li>Item 2</li>
  <ul>
```

DOM节点也可以表示为一个JavaScript对象，就像这样：

```javascript
    //用Javascript代码表示DOM节点的伪代码
    Let domNode = {
      tag: 'ul'
      attributes: { id: 'myId' }
      children: [
    //这里是 li
      ]
    };
```

### Vue.js在2.0 版本中引入虚拟DOM是一个正确的选择吗 ？
引入虚拟DOM实际上有优点也缺点。 

1. 尺寸     
更多的功能意味着更多的代码。幸运的是Vue.js 2.0仍然是相当小的（21.4kb当前版本）。   
2. 内存   
虚拟DOM需要在内存中的维护一份DOM的副本。在DOM更新速度和使用内存空间之间取得平衡。 
3. 不是适合所有情况    
如果虚拟DOM大量更改，这是合适的。但是单一的，频繁的更新的话，虚拟DOM将会花费更多的时间处理计算的工作。  
所以，如果你有一个DOM节点相对较少页面，用虚拟DOM，它实际上有可能会更慢。  
但对于大多数单页面应用，这应该都会更快。
## 除了性能提升外还有什么
引入虚拟DOM，这不仅仅是一种性能增强，这同时意味着更多的功能。  
例如，您可以在虚拟DOM中的 render() 方法直接创建新的节点  

```javascript
new Vue({
  el: '#app',
  data: {
   message: 'hello world'
  },
  render() {
    var node = this.$createElement;
    return node(
      'div', 
      { attrs: { id: 'myId' } }, 
       this.message
    );
  }
});
```

输出:

```html
<div id='app'>
  <div id='myId'>hello world</div>
</div>
```

为什么这样做？你可以用全编程语言JavaScript编程，您可以创建工厂式的功能来建立虚拟节点。
