function highestScore(students) {
  // Code disini
  var classObj = [];
  var result = {}
  if (students.length === 0) {
    return result;
  }
  //input kelas
  for (a = 0; a < students.length; a++) {
    var className = students[a].class;
    if (classObj === 0) {
      continue;
    } else {
      classObj.push(className)
    }
    // console.log(classObj)
    for (b = 0; b < classObj.length; b++) {
      var studentsObj = {}
      var highestRank = 0;
      //mencocokkan class obj & student class
      for (c = 0; c < students.length; c++) {
        if (classObj[b] === students[c].class && students[c].score > highestRank) {
          highestRank = students[c].score;
          studentsObj.name = students[c].name;
          studentsObj.score = students[c].score;
        }
        result[classObj[b]] = studentsObj;
      }
    }
  }
    return result
  }

  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));

  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }


  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));

  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }


  console.log(highestScore([])); //{}