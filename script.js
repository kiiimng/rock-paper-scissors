

let rockOption = document.getElementById('rock');
let paperOption = document.getElementById('paper');
let scissorsOption = document.getElementById('scissors');
let resultDisplay = document.getElementById('results');
let text = document.getElementById('p');
let replay = document.getElementById('replay');



document.getElementById('replay').addEventListener('click', resetGame);


let user = {
	choice: null
}

let computer = {
	choice: null
}

resetGame();

function userChoice(e) {
	user.choice = e.target.id;
	let v = document.getElementsByClassName('choices');
	for ( let i of v) {
		if (i.id !== user.choice) {
			 i.setAttribute("hidden", "");

		}
		e.target.removeEventListener('click', userChoice);
	};
	p.innerHTML = " ";
	document.getElementById('replay').removeAttribute("hidden");
	computerChoice();
	getWinner();


}

function computerChoice(){
	let choiceArr = ["rock", "paper", "scissors"]; 
	let iconArr = ["fa-hand-rock", "fa-hand-paper", "fa-hand-scissors"];
	let randomIndex = Math.floor((Math.random()*3))
	computer.choice = choiceArr[randomIndex];
	
	document.getElementById('compChoice').classList.remove("fa-question-circle");
	document.getElementById('compChoice').classList.add(iconArr[randomIndex]);	
}

function resetGame(){
	rockOption.addEventListener('click', userChoice);
	paperOption.addEventListener('click', userChoice);
	scissorsOption.addEventListener('click', userChoice);
	user.choice = null;
	
	let v = document.getElementsByClassName("choices");
	
	for (let i of v) {
		i.removeAttribute("hidden");
	}
	
	document.getElementById('compChoice').setAttribute("class", "far fa-question-circle");

	resultDisplay.innerHTML = "";
	replay.setAttribute("hidden", "");
	p.innerHTML = "Make your move";
}


function getWinner(){

	let rpsmap = {
		"rock" : "paper",
		"scissors" : "rock",
		"paper" : "scissors"
	};


	if (user.choice == computer.choice) {
		resultDisplay.innerHTML = "It's a draw!";
	} else if (user.choice == rpsmap[computer.choice]) {  //rock vs scissors
		resultDisplay.innerHTML ='User Wins!'
	}
		//rock          //rock
	else if (user.choice !== rpsmap[computer.choice]) { //
		resultDisplay.innerHTML ='Computer Wins!'
	}
		
}