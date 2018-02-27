 function quicksort (arr) {
     
    if(arr.length<1){
      return arr
    }
    
    var left = [];
    var right = [];
    var example = Math.floor(arr.length/2);
    var exampleArr = arr.splice(example,1)[0];
    
    for(var i =0;i<arr.length;i++){
  
       if(arr[i] < exampleArr){
          left.push(arr[i]);
       }else {
          right.push(arr[i]);
       }
      
    }
    
    return quicksort(left).concat([exampleArr],right)
 
 
 }
