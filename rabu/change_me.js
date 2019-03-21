function changeMe(arr) {
    var num = 0;
    var fullName = '';
    var personData = {};

    if(arr.length===0){
        console.log('""')
    }
    for (var a = 0; a < arr.length; a++) {
        num++;
        fullName = arr[a][0] + ' ' + arr[a][1];
        
        personData.firstName = arr[a][0];
        personData.lastName = arr[a][1];
        personData.gender = arr[a][2];
        personData.age = arr[a][3];
        //personData.age=2019-arr[a][3];
        if (personData.age === undefined || personData.age > 2019) {
            personData.age = 'Invalid Birth Year';
        }
        else { personData.age = 2019 - arr[a][3] }
        console.log(num + '. ' + fullName + ':')
        console.log(personData)
        
    }

    return personData;

}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:

// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
