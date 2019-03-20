function digitPerkalianMinimum(angka) {
    // you can only write your code here!
var faktorial=[];
for(var a=0; a<=angka; a++){
    for(var b=0; b<=angka; b++){
    if(a*b===angka){
        var join=a.toString()+b.toString();
        faktorial.push(join);
    }

    }
}
var pembanding=faktorial[0].length;
for(var c=0; c<faktorial.length; c++){
    if(faktorial[c].length<pembanding){
        pembanding=faktorial[c].length;
    }
}
return pembanding;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2