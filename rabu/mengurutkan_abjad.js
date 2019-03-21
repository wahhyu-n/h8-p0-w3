function urutkanAbjad(str) {
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var temp='';

for(i=0; i<alphabet.length; i++){
  //var indexUrutan=0;
    for(j=0; j<str.length; j++){
        if(alphabet[i]===str[j]){
            // indexUrutan=j
          temp+=str[j];
        }
    }
}return temp;
  }
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'