const a = parseFloat(prompt('a = ', 'write lenght of a side here'));
const b = parseFloat(prompt('b = ', 'write lenght of b side here'));
const c = parseFloat(prompt('c = ', 'write lenght of c side here'));

if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
    alert('Data is incorrect. Please input valid numeric data')
} else {
    if ( a+b <c || b+c < a || a+c < b ) {
      console.log(`Triangle doesn't exist `);
    } else if ( a+b > c && b+c > a && a+c > b ) {
      if (a === b && a === c) {
        console.log('Equivalent triangle');
      } else if ( a === b && a !== c || 
          a === c && a !== b || b === c && b !== a ) {
        console.log('Isosceles triangle');
      } else if(a !== b && a !== c && b !== c) {
        console.log('Normal triangle');
      }
    }
}