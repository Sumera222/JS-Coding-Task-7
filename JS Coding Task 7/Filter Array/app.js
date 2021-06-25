const ages = [40, 56, 80, 90, 100, 101, 102, 23, 22]
console.log(ages)      //print array of ages

const x = ages.filter(function(ages){    //filter for ages>=40
    return ages >= 40;
  })
  
  // below is to print new filtered array
  console.log(x);