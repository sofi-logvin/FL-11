let range = 8;
let startRange = 8;
let rangeAdd = 4;
let prize = 100;
let startPrize = 100;
let prizeMult = 2;
let earnings = 0;
let attempts = 3;
let three = 3;
let currentPrize = prize;
const decision = confirm('Do you want to play a game?')
let proceed = true
if(decision){
  do{
    const generatedNumber = Math.floor(Math.random() * range);
    const getNumber = prompt(`Choose a roulette pocket number from 0 to ${range}
Attempts left: ${attempts}
Total prize: ${earnings}$
Possible prize on current attempt: ${currentPrize}$
    `);
    if(generatedNumber === +getNumber){
      range += rangeAdd;
      prize *= prizeMult;
      attempts = three;
      earnings += currentPrize;
      alert(`Congratulation!
Your prize is: ${currentPrize}
      `)
      currentPrize = prize;
      proceed = confirm('Do you want to continue?')
      if(!proceed){
        alert(`Thank you for a game.
Your prize is: ${earnings}
        `)
        const playAgain = confirm('Do you want to play again?');
        if(playAgain){
          proceed = true;
          prize = startPrize;
          range = startRange;
          earnings = 0;
          attempts = three;
          currentPrize = startPrize;
        }
      }
    } else {
      attempts -= 1;
      currentPrize = Math.floor(currentPrize / prizeMult);
      if(attempts === 0) {
        alert(`Thank you for a game.
Your prize is: ${earnings}
        `)
        const playAgain = confirm('Do you want to play again?');
        if(playAgain){
          proceed = true;
          prize = startPrize;
          range = startRange;
          earnings = 0;
          attempts = three;
          currentPrize = startPrize;
        }
      }
    }
  } while(attempts > 0 && proceed)
} else {
  alert('You did not become a millionaire, but can.');
}