// Code your solutions in this file

function writeCards(array, event) {
  let thankYouCards = []
  for (let counter = 0; counter < array.length; counter++ ) {
    thankYouCards.push(`Thank you, ${array[counter]}, for the wonderful ${event} gift!`);
  }
  return thankYouCards
}


function countDown(num) {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }
  console.log(num);  
}