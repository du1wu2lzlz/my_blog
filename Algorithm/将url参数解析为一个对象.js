// 编写一个函数(parseQueryString)将URL参数解析成一个对象。 
// 该题的关键是要处理特殊字符 ‘?’ ‘&’ ‘=’ ‘#’。

// ‘?’代表后面的字符串全是查询字符串
// ‘&’代表参数分割符
// ‘=’代表参数的名称和值的分隔符,第一个=号后面的部分全部为值
// ‘#’代表后面的部分不会作为请求发送到服务端
// 例如：

// 正常输入 : http://localhost/#api?name=wz&age=12 
// 输出 : {name:"wz",age=12}
// 特殊输入 : http://localhost:8000/api?name=wz=?1&age?=18#=2 
// 输出 : {"name":"wz=?1","age?":"18"}
// 特殊输入 : "" 
// 输出 : {}
// 获取url : window.location.href

// var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2";

//  function parseQueryString(url){
//     var arr;
//     var res = {};
//     //#符号之后的值称为hash，都不会加到request请求中去
//     url = url.split('#')[0];
//     //获取queryString 第一个？号后面的全是查询字符串
//     arr = url.split('?');
//     arr.shift();
//     var queryStr = arr.join('?');
//     //查询字符串为空直接返回 避免出现这样的返回值{"":""}
//     if (queryStr.trim().length == 0){
//         return res;
//     }

//     //获取参数
//     arr = queryStr.split('&');
//     for (var i = 0; i <  arr.length; i++) {
//         var itemArr = arr[i].split('=');
//         //第一个=号之前的是name 后面的全是值
//         var name = itemArr.shift();
//         var value = itemArr.join('=');
//         res[name] = value;
//     }
//     return res;
// }

function getUrlkey(url){
  var params = {},
      arr = url.split("?");
  if (arr.length <= 1)
      return params;
  arr = arr[1].split("&");
  for(var i=0, l=arr.length; i<l; i++){
      var a = arr[i].split("=");
      params[a[0]] = a[1];
  }
  return params;
}
var url = "http://www.chenwenbo.info?key0=0&key1=1&key2=2",
  ps = getUrlkey(url);
console.log(ps);
