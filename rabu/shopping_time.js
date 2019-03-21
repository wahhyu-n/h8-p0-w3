function shoppingTime(memberId, money) {
    // you canmoneyr codvarere!

var sisa=money;
var listPurchased=[];

var result={}
    result.memberId=memberId;
    result.money=money;
    result.listPurchased=listPurchased;
    if(memberId === '' || memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
      } else if(money < 50000){
        return 'Mohon maaf, uang tidak cukup';
      }
    if(sisa>=1500000){
        sisa=sisa-1500000;
        listPurchased.push('Sepatu Stacattu');
    }
    if(sisa>=500000 && sisa<1500000){
        sisa=sisa-500000;
        listPurchased.push('Baju Zoro');
    }
    if(sisa>=250000 && sisa<500000){
        sisa=sisa-250000;
        listPurchased.push('Baju H&N');
    }
    if(sisa>=175000 && sisa<250000){
        sisa=sisa-175000;
        listPurchased.push('Sweater Uniklooh');
    }
    if(sisa>=50000 && sisa<175000){
        sisa=sisa-50000;
        listPurchased.push('CasingHandphone');
    }

    result.changeMoney=sisa;

    
      return result;
    
}

  // TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja