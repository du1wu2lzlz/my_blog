
+ 虚拟DOM
更新DOM是非常昂贵的操作，我们可以用JavaScript对象来代替DOM节点  
比如：  
DOM节点在HTML文档中的表现通常是这样的：  

```
  <ul id='myId'>
    <li>Item 1</li>
    <li>Item 2</li>
  <ul>
```

DOM节点也可以表示为一个JavaScript对象，就像这样：

```
    //用Javascript代码表示DOM节点的伪代码
    Let domNode = {
      tag: 'ul'
      attributes: { id: 'myId' }
      children: [
    //这里是 li
      ]
    };
```
