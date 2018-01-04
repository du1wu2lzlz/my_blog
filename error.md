

```javasrcipt
try{
     //可能会导致错误的代码
} catch(error) {
    //在错误发生时如何处理
} 
```



```javascript
 var test = function(values){ 
             if(!(values instanceof Array)){
                throw new Error("需要输入数组")}; 
             values.sort(); 
             for(var i=0;i<values.length;i++){
              if(values[i] > 100){
                 return values[i];
              }
              return -1;
            }
 var test1=test(1);
 console.log(test1);
```
