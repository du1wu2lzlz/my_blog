### 实习相关

host: C:\Windows\System32\drivers\etc\hosts

+ 下拉框数组去重   
关联取票人姓名下拉框，联系人+出游人的并集，但是要去重
[参考](https://segmentfault.com/a/1190000003984330)

+ 图片img的src不变让浏览器重新加载实现方法        
图片img的src不变,想让浏览器重新加载怎么办,在图片地址src不变的情况下让浏览器重新加载图片,实际上在src不变时，浏览器直接就去读取缓存   
javascript给这个img标签的src属性后面拼接一个 ? 和 javascript对象new Date().getTime()毫秒值做成queryString的样子，就能防止被缓存了   
在图片地址src不变的情况下让浏览器重新加载图片    
实际上，在src不变时，浏览器直接就去读取缓存了     
解决办法： 
var img_src ='http://www.ilsea.net/images/seagull.jpg?t='+Math.random(); 
这样给图片地址拼接一个随机数，用js重新给 img 的 src 赋值，okay 

+  vue2.0中mounted后不能保证到有vue实例了
   在mounted加个this.$nextTick方法
