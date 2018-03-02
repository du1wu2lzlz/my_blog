// 尽可能全面正确的解析一个任意url的所有参数为Object。
var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled';
parseParam(url);
/**
结果：
{
   user: 'anonymous',
   id: [123, 456], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
   city: '北京', // 中文
   enabled: true, // 未指定值的 key 约定值为 true
}
*/

 function parseParam(url) {
		var param = url.trim().split('?')[1];
		var parse = param.trim().split('&');
		var obj ={};
		for(var i=0;i<parse.length;i++){
			var a = parse[i].split('=');
			obj[0] = a[0];
			obj[a[0]] = a[1];
		}
		console.log(obj)
		return obj
	}
  
  var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled';
	parseParam(url);
