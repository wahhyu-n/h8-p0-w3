function ubahHuruf(kata){
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
//var splitAlphabet = alphabet.split('');
//console.log(splitAlphabet)
var temp='';
for(var i = 0; i<kata.length;i++){
    var indexAlphabet = 0;
    for(var j = 0; j < alphabet.length; j++){
        if(kata[i]=== alphabet[j]){
            indexAlphabet = j;
        }
    }
    temp+=alphabet[indexAlphabet+1];
}
// for(var a=0; a<kata.length; a++){
//     var temp1=kata[a];
// }
// for(var b=0; b<splitAlphabet.length; b++){
//     var temp2=splitAlphabet[b];
// }
// if(temp1===temp2){
//     temp.push(splitAlphabet[b+1]);
    
// }
return temp;
}
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu