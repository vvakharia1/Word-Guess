// 1.0 Creating gameWords array 
const gameWords = ['colombia', 'peru', 'argentina', 'brazil', 'chile', 'venezuela', 'ecuador', 'bolivia'];

/* 1.1 Creating randomWord function
  We've associated the randomWords function to a parameter called guessWords. Whenever that function is called
  a country from the array above will be chosen and that answer will be returned within that block
*/
 function randomWord(gameWords) {
    let randomCountry = Math.floor(Math.random() * gameWords.length);
    return gameWords[randomCountry];
};

/* 1.2 Creating the isCorrectGuess function 
   We've associated the isCorrectGuess function with 2 parameters, word and letter. When defined within the
   function the conditional result will make sure that the letter picked by the user is in the length of the word
*/
function isCorrectGuess(word, letter) {
for (var i = 0; i < word.length; i++);
if (word[i] === letter) {
    return true;
} else {
    false;
}
};

 // 1.3 

function getBlanks(word) {
for (var i = 0; i = word.length; i++) {
    if (word )
}
}