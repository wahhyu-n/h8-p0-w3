function countProfit(shoppers) {
  let listBarang = [['Sepatu Stacattu', 1500000, 10],
  ['Baju Zoro', 500000, 2],
  ['Sweater Uniklooh', 175000, 1]
  ];
  // you can only write your code here!
  let pembeliSepatu = [];
  let pembeliBaju = [];
  let pembeliSweater = [];

  let profitSepatu = 0;
  let profitBaju = 0;
  let profitSweater = 0;
  for (var i = 0; i < shoppers.length; i++) {
   // for(var j = 0; j < listBarang.length; j++){
    if (shoppers[i].product === listBarang[0][0]) {
      //listSepatu.product=listBarang[0][0];
      //console.log(listSepatu);
      if (listBarang[0][2] - shoppers[i].amount >= 0) {
        listBarang[0][2] = listBarang[0][2] - shoppers[i].amount;
        profitSepatu = profitSepatu+listBarang[0][1] * shoppers[i].amount;//
        pembeliSepatu.push(shoppers[i].name)//
      }
    }
    else if (shoppers[i].product === listBarang[1][0]) {
      if (listBarang[1][2] - shoppers[i].amount >= 0) {
        listBarang[1][2] = listBarang[1][2] - shoppers[i].amount;
        profitBaju = profitBaju+listBarang[1][1] * shoppers[i].amount;//
        pembeliBaju.push(shoppers[i].name)//
      }
    }
    else if (shoppers[i].product === listBarang[2][0]) {
      if (listBarang[2][2] - shoppers[i].amount >= 0) {
        listBarang[2][2] = listBarang[2][2] - shoppers[i].amount;
        profitSweater = profitSweater+listBarang[2][1] * shoppers[i].amount;
        pembeliSweater.push(shoppers[i].name)
      }
    }
  //}
}
  var output = [{
    product: listBarang[0][0],
    shoppers: pembeliSepatu,
    leftOver: listBarang[0][2],
    totalProfit: profitSepatu
  },
  {
    product: listBarang[1][0],
    shoppers: pembeliBaju,
    leftOver: listBarang[1][2],
    totalProfit: profitBaju
  },
  {
    product: listBarang[2][0],
    shoppers: pembeliSweater,
    leftOver: listBarang[2][2],
    totalProfit: profitSweater
  }]
  return output;
}


// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]