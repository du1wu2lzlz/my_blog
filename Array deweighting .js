
// a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" 
  //longest(a, b) -> "abcdefklmopqwxy"
var a = 'xyaabbbccccdefww';
var b = 'xxxxyyyyabklmopq';
function longest(s1, s2) {
   var left = s1.split('');
   var right = s2.split('')
   var totle = left.concat(right);
   var result = totle.unique().join('');
  return result;
  
}
//数组去重
//1.先将原数组进行排序
//2.检查原数组中的第i个元素 与 结果数组中的最后一个元素是否相同，因为已经排序，所以重复元素会在相邻位置
//3.如果不相同，则将该元素存入结果数组中
Array.prototype.unique = function(){
    this.sort(); //先排序
    var res = [this[0]];
    for(var i = 1; i < this.length; i++){
     if(this[i] !== res[res.length - 1]){
      res.push(this[i]);
     }
    }
    return res;
   }
longest(a,b);
