'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let score1EL = document.querySelector('#score--0');
let score2EL = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let diceEL = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];

score1EL.textContent = 0;
score2EL.textContent = 0;
diceEL.classList.add('hidden');
////random dice roll function
btnroll.addEventListener('click', function () {
  //generate random dice
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  //display change of dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;
  //player switching
  if (dice !== 1) {
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
});
