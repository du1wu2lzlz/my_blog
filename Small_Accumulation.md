## var let const 的区别


```js

```
## setTimeout() setInterval() Promise()的执行顺序
```
任务队列 ： 
1. macro-task 宏任务
2. microTask  微任务

执行顺序:
我们设
macro-task队列包含任务: a1, a2 , a3 
micro-task队列包含任务: b1, b2 , b3

执行顺序为:
首先执行marco-task队列开头的任务，也就是 a1 任务
执行完毕后，在执行micro-task队列里的所有任务，也就是依次执行b1, b2 , b3，执行完后清空micro-task中的任务
接着执行marco-task中的第二个任务，依次循环。

macro-task队列真实包含任务：
*script(主程序代码),setTimeout, setInterval, setImmediate, I/O, UI rendering*

micro-task队列真实包含任务： 
process.nextTick, Promises, Object.observe, MutationObserver

```
## web性能优化-懒加载
  函数节流   
  函数防抖  

## 事件委托的优缺点
```
  优点：
      1. 减少事件注册，节省内存。比如，在table上代理所有td的click事件。在ul上代理所有li的click事件。
      2. 简化了dom节点更新时，相应事件的更新。比如不用在新添加的li上绑定click事件。当删除某个li时，不用移解绑上面的click事件。
  缺点：
      1. 事件委托基于冒泡，对于不冒泡的事件不支持。
      2. 层级过多，冒泡过程中，可能会被某层阻止掉。
      3. 理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，比如在table上代理td，而不是在document上代理td。
      4. 把所有事件都用代理就可能会出现事件误判。比如，在document中代理了所有button的click事件，另外的人在引用改js时，可能不知道，造成单击button触          发了两个click事件。
```
  ## vue 如何实现双向绑定(对象与数组)
