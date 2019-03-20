function cariMedian(arr) {
    var a=0; b=0; c=0; d=0;
    //arr.sort();
if(arr.length%2==0){
    a=(arr.length/2)-1;
    b=(arr[a]+arr[a+1])/2;
    return b;
}else if(arr.length%2==1){
    c=Math.floor(arr.length/2);
    d=(arr[c]);
    return d;
}
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5