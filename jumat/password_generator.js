function changeVocals(str) {
    //code di sini
    var vocal = 'aiueoAIUEO';
    var consonan = 'bjvfpBJVFP';
    var temp = '';
    for (var i = 0; i < str.length; i++) {
        var cekHuruf = false;
        for (var j = 0; j < vocal.length; j++) {
            if (str[i] === vocal[j]) {
                temp += consonan[j]//tdk memakai looping lg krn length dr vocal=consonan
                cekHuruf = true;
            }

        }
        if (cekHuruf === false) {
            // temp.push(str[i])
            temp += str[i];
        }
    }
    // console.log(temp)
    return temp;
}

function reverseWord(str) {
    //code di sini
    var temp = ''
    for (var i = str.length - 1; i >= 0; i--) {
        temp += str[i];
    }
    return temp;
}

function setLowerUpperCase(str) {
    //code di sini
    var hurufKecil='abcdefghijklmnopqrstuvwxyz '
    var hurufBesar='ABCDEFGHIJKLMNOPQRSTUVWXYZ '
    var temp = ''
    for (var i = 0; i < str.length; i++) {
        for(var j=0; j<hurufKecil.length; j++){
            if (str[i] === hurufKecil[j]) {
                temp += hurufBesar[j]
            }
            if (str[i]===hurufBesar[j]){
                temp += hurufKecil[j]
            }
        }
    }
    return temp;
}

function removeSpaces(str) {
    //code di sini
    var temp = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            temp += str[i];
        }
    }
    return temp;
}

function passwordGenerator(name) {//tiap fungsi dipanggil di fungsi ini
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var fungsi1 = changeVocals(name);
    var fungsi2 = reverseWord(fungsi1);
    var fungsi3 = setLowerUpperCase(fungsi2);
    var fungsi4 = removeSpaces(fungsi3);

    // var result = '';

    // for (i = 0; i < fungsi4.length; i++) {
    //     result += fungsi4;
    // }
    return fungsi4
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'