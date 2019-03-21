function tukarBesarKecil(kalimat){
var tampung=''
for(var a=0; a<kalimat.length; a++){
    if(kalimat[a]===kalimat[a].toUpperCase()){
        tampung+=kalimat[a].toLowerCase();
    }else{
        tampung+=kalimat[a].toUpperCase();
    }
}
return tampung;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"