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
