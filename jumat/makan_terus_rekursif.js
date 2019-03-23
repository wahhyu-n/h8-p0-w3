function makanTerusRekursif(waktu) {
  // you can only write your code here!
  /*66-15=51
    51-15=36
    36-15=21
    21-15=6
    6-15=0

  */
// var hasil=0
if(waktu===0){//best case
    return 0;
}
if(waktu<=15){
    return 1;
}
return 1+makanTerusRekursif(waktu-15)
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0