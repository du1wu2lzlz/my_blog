## underscore
(中文文档)[http://www.css88.com/doc/underscore/#]   
```javasrcipt
isArray_.isArray(object) 
如果object是一个数组，返回true。

(function(){ return _.isArray(arguments); })();
=> false
_.isArray([1,2,3]);
=> true
```

```javascript
indexOf_.indexOf(array, value, [isSorted]) 
返回value在该 array 中的索引值，如果value不存在 array中就返回-1。使用原生的indexOf 函数，除非它失效。如果您正在使用一个大数组，你知道数组已经排序，传递true给isSorted将更快的用二进制搜索..,或者，传递一个数字作为第三个参数，为了在给定的索引的数组中寻找第一个匹配值。

_.indexOf([1, 2, 3], 2);
=> 1
```
