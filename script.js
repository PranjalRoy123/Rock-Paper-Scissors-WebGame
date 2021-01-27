var userScore = 0;
var computerScore = 0;
const userScore_span= document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const results_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const comp_div = document.getElementById('comp-choice-div');
const comp_img = document.getElementById('computer-image')
const user_div = document.getElementById('user-choice-div')
const user_img = document.getElementById('user-image')


function verb(winner) {
if (winner === "r") {
return " hits ";
} else if (winner === "p") {
return " covers "
} else if (winner === "s") {
return " cuts ";
} else {
return " defeats ";
}
}


function change_image(element,letter) {
if (letter === "r") {
element.src = "rock.png"
} else if (letter === "s") {
element.src = "scissors.png"
} else if (letter === "p") {
element.src = "paper.png"
}
}


function win(user, comp) {
userScore ++ ;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
results_p.innerHTML = word(user) + verb(user) + word(comp) + ". You win!! "
user_div.classList.add("greenGlow")
comp_div.classList.add('redGlow')
setTimeout(function() {
user_div.classList.remove("greenGlow");
comp_div.classList.remove('redGlow')
} , 500)
change_image(comp_img, comp);
change_image(user_img, user);
}


function lose(user, comp) {
computerScore += 1;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
results_p.innerHTML = word(comp) + verb(comp) + word(user) + ". You lose!! "
comp_div.classList.add("greenGlow")
user_div.classList.add('redGlow')
setTimeout(function(){
comp_div.classList.remove("greenGlow");
user_div.classList.remove('redGlow')
} , 500)
change_image(comp_img, comp);
change_image(user_img, user);
}


function draw(user, comp) {
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
results_p.innerHTML = "Two " + word(comp) + "s results in a draw."
user_div.classList.add("grayGlow")
comp_div.classList.add('grayGlow')
setTimeout(function(){
user_div.classList.remove("grayGlow");
comp_div.classList.remove('grayGlow')
} , 500)
change_image(comp_img, comp);
change_image(user_img, user);
}


function word(letter) {
if (letter === "r") {
return "Rock"
} else if (letter === "p") {
return "Paper"
} else if (letter === "s") {
return "Scissor"
}
}


function getCompChoice() {
const choices = ['r', 'p', 's'];
const ranInt = (Math.floor(Math.random() * 3));
return choices[ranInt];
}


function game (userChoice) {
const computerChoice = getCompChoice();
switch(userChoice + computerChoice) {
case "rs":
case "pr":
case "sp":
win(userChoice, computerChoice)
break;
case "rp":
case "ps":
case "sr":
lose(userChoice, computerChoice)
break;
case "rr":
case "pp":
case "ss":
draw(userChoice, computerChoice)
break;
}
}


rock_div.addEventListener('click', ()=> {
game('r');
})
scissors_div.addEventListener('click', () => {
game('s');
})
paper_div.addEventListener('click', () =>{
game('p');
})
