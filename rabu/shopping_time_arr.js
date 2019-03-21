function shoppingTime(memberId, money) {
    var shopping = {}
    var barang = [
                    ['Sepatu Stacattu', 1500000],
                    ['Baju Zoro', 500000],
                    ['Baju H&N', 250000],
                    ['Sweater Uniklooh', 175000],
                    ['Casing Handphone', 50000]
                 ]
    
    if(memberId === undefined && money === undefined){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    
    if(memberId === ''){
      return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else {
      shopping.memberId = memberId
    }
    
    if(money <= 50000 ){
      return 'Mohon maaf, uang tidak cukup'
    } else {
      shopping.money = money
    }
    
    var jumlahHargaBarang = 0
    shopping.listPurchased = []
    for(let i = 0; i < barang.length; i++){
      
      if(money > barang[i][1]){
        shopping.listPurchased.push(barang[i][0])
        jumlahHargaBarang += barang[i][1]
      }
      shopping.changeMoney = money - jumlahHargaBarang
    }
     return shopping
  }