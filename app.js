let words = [
"программа",
"макака"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++){
	answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0){
	alert(answerArray.join(" "));

let guess = prompt("Угадайте букву или нажмите отмена для выхода из игры!");
console.log(guess);

 if (guess === null){
 	alert("Жаль, что вы не сыграли с нами, а слово было загадано - " + word);
	 break;
	 
 } else if (guess.length !== 1){
	  alert("Пожалуйста, введите только одну букву.");
	  
 } else {
     for (let j = 0; j < word.length; j++){

       if (word[j] === guess){
		   answerArray[j] = guess;
			remainingLetters--;
	   }
	   if (remainingLetters === 0){
		alert("You WINNER!!!!!");
		break;
	     }
     } 
   }
}

alert(answerArray.join(" "));

