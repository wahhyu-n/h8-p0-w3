function checkAB(num) {
    //var temp='';
    var result = false;
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a' && num[i + 4] === 'b') {
            result = true;
        }
        if (num[i] === 'b' && num[i + 4] === 'a') {//perbedaan if dua dg else if yaitu jk if&if dijalankan semua jk if-else dijalankan salah satu
            result = true;
        }
        // else{
        //     result=false;
        // }

    }
    return result;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false