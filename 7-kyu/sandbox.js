// Reverse the bits in an integer

function reverseBits(n) {
    const binaryReverse = n.toString(2).split('').reverse().join('')
    return parseInt(binaryReverse, 2)
  }

// or

function reverseBits (n) {
    let tmp = n.toString(2);
    var salida = "";
    for(let i = tmp.length-1; i>=0; i-- ){
      salida += tmp[i];
    }
    return (parseInt(salida,2));
  }

//   How many days are we represented in a foreign country?

function daysRepresented(trips){
  const days = trips
    .map(([start, end]) => [...Array(end - start + 1)].map((_, i) => i + start))
    .reduce((arr, val) => arr.concat(val), [])
  return new Set(days).size;
}

//   or

function daysRepresented(trips) {
    const days = Array(365).fill(0);
    for ([a, b] of trips)
      for (let i = a - 1; i < b; i++)
        days[i] = 1;
    return days.reduce((a, b) => a + b);
  }

//   or

function daysRepresented(trips){
  var arr=[];
  for (var i=0; i<trips.length; ++i)
    for (var j=trips[i][0]; j<=trips[i][1]; ++j)
      if (arr.indexOf(j)==-1)
        arr.push(j);
  return arr.length;
}

//   Sentences should start with capital letters.

function fix(paragraph){
    if(paragraph == '') return ''
    return paragraph.split('. ')
                    .map(word => word[0].toUpperCase() + word.slice(1))
                    .join('. ') 
   }

//    or

function fix(paragraph){
  
    if (paragraph.length === 0) {
      return paragraph;
    }
     
     paragraph = paragraph.replace(/'  '/g, ' ')
     paragraph = paragraph.split('. ')
     
     for (let i = 0; i < paragraph.length; i++) {
       paragraph[i] = paragraph[i].split('')
       paragraph[i][0] = paragraph[i][0].toUpperCase()
       paragraph[i] = paragraph[i].join('')
     }
      
     return paragraph.join('. ')
   }

//    or

function fix(paragraph) {
    const arr = paragraph.split('.')
    const str = arr
      .map((sentence) => sentence.replace(/[a-z]/,(match) => match.toUpperCase()),)
      return str.join('.');
  }