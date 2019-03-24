function cariModus(arr){
//var temp=0;
var result=0;
var modus=0;
//console.log(cariModus([10, 4, 5, 2, 4])); // 4
for(var a=0; a<arr.length; a++){
    //var result=false
    for(var b=0; b<arr.length; b++){
    if(arr[a]===arr[b] && a!==b)//a!==b agar tdk terdefinisi ke index yg sama
    {
        modus++;
        result=arr[a];//jk bil array terakhir 10
    }
    if(modus > 4){
    //modus.push(arr[a]);
        result = -1;
    }
    if(modus > 4 && arr[a]!==arr[b]){//agar console.log(cariModus([7, 7, 7, 7, 7, 1, 1])); // 7
        //modus.push(arr[a]);
            return arr[a];
        }
    if(modus === 0){
        result = -1;
    }
}
}
return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1