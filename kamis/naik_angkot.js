function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arr = [];//ditaruh atas agar hasil looping pertama tdk keganti
    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === arrPenumpang[i][2]) {//harus sama i dg arrpenumpang & j dg rute
                var jarakAkhir = j;
            }
            else if (rute[j] === arrPenumpang[i][1]) {
                var jarakAwal = j;
            }
        }
        var bayar = (jarakAkhir - jarakAwal) * 2000;
        
        // var output=[{penumpang : arrPenumpang[i][0],
        //     naikDari : arrPenumpang[i][1],
        //     tujuan : arrPenumpang[i][2],
        //     bayar : bayar}]
        var output = {}//agar hasil looping sebelumnya tdk ke push doble
        output.penumpang = arrPenumpang[i][0];
        output.naikDari = arrPenumpang[i][1];
        output.tujuan = arrPenumpang[i][2];
        output.bayar = bayar;
        arr.push(output);

    }
    return arr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]