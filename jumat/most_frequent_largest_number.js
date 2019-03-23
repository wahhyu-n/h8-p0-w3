function sorting(arrNumber) {
    // code di sini
    for(var a=0; a<arrNumber.length; a++){
        for(var b=0; b<arrNumber.length-a-1;b++){
            if (arrNumber[b] > arrNumber[b + 1]) {
                // swap
                var temp = arrNumber[b];
                arrNumber[b] = arrNumber[b+1];
                arrNumber[b + 1] = temp;
              }
             }
            }
            // console.log(arrNumber)
            return arrNumber; 
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length===0){
        return "''"
    }
    var counter=0
    for(var c=0; c<arrNumber.length; c++){
        if(arrNumber[c]==arrNumber[arrNumber.length-1]){
            counter++;
        }
    }
        return 'angka paling besar adalah '+arrNumber[arrNumber.length-1]+' dan jumlah kemunculan sebanyak '+counter+' kali';
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''