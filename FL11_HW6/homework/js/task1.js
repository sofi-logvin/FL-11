const aX = parseFloat(prompt('a = ', 'write x coordinate of A here'));
const aY = parseFloat(prompt('a = ', 'write y coordinate of A here'));
const bX = parseFloat(prompt('b = ', 'write x coordinate of B here'));
const bY = parseFloat(prompt('b = ', 'write y coordinate of B here'));
const cX = parseFloat(prompt('c = ', 'write x coordinate of C here'));
const cY = parseFloat(prompt('c = ', 'write y coordinate of C here'));

const half = 2;

if (isNaN(aX) || isNaN(aY) || isNaN(bX) || isNaN(bY) || 
  isNaN(cX) || isNaN(cY) ) {
  alert('Invalid input data. Please write correct points location ');
} else {
  const position = Math.sign((bX - aX) * (cY - aY) - (bY - aY) * (cX - aX));
   if (position === 0) {
      const lineCenterXcoordinate = (aX+bX)/half;
      const lineCenterYcoordinate = (aY+bY)/half;
      if ( lineCenterXcoordinate === cX && lineCenterYcoordinate === cY ) {
        console.log(true);
      } else{
        console.log(false);
      }
   } else {
     console.log(false);
   }
  }
