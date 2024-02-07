const gameDiv = document.getElementById('gameDiv');
const tableDiv = document.getElementById('tableDiv');
 


gameDiv.innerHTML += 'New Game';
gameDiv.style.color = 'red';
gameDiv.style.textAlign = 'center';

const rightplayer = document.createElement('div');

rightplayer.style.border = 'solid black 1em'
document.body.