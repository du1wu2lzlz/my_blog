//  实现函数range([start,]stop[,step])返回一个数组（step大于1）

// > range(1,11); => [1,2,3,4,5,6,7,8,9,10]

// > range(0); => []

// > range(10); => [0,1,2,3,4,5,6,7,8,9]

// > range(0,30,5); => [0,5,10,15,20,25]


function range () {
   var arglength = arguments.length;
   var arr = [];
   var start = arguments[0];
   var stop  = arguments[1];
   var step  = arguments[2];
   switch(arglength){
     case 0 : throw Error('至少输入一个参数');
     case 1 : {
                stop = arguments[0];
                for(var i=0;i<stop;i++){
                  arr.push(i);
                }
                console.log(arr);
                return arr
               };
      case 2 : {
               
                 start = arguments[0];
                 stop  = arguments[1];
                 for(var i=start;i<stop;i++){
                   arr.push(i);
                 }
                 console.log(arr);
                 return arr
                };
      case 3 : {
                 for(var j =start; j<stop; j=j+step){
                   arr.push(j); 
                 }
                 console.log(arr);
                 return arr
               };
     default : throw Error('test')
   }
 }
range(0,30,5);
