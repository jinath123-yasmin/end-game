var readlineSync=require("readline-sync");

var userName = readlineSync.question("what is your name? ");
console.log("Welcome "+userName +" Do you know jinath?");

var score=0;

var highScore=[{
  name: "Jinath",
  score: 10,
},
{
  name: "Mausam",
  score: 8
},];

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer==answer){
    console.log("You are Right!");
    score++;
  }
  else{
    console.log("You are wrong!");
    score--;
  }
  console.log("----------");
}

var questions=[
  {
    question: "Favourite Superhero ",
    answer:"superman",
  },{
    question: "favourite F.R.I.E.N.D.S character ",
    answer: "Chandler Bing",
  },{
     question: "where do she live? ",
     answer: "Assam",
  },{
     question: "what is her favourite colour? ",
     answer: "blue",
  },{
     question: "what is her favourite junk food? ",
     answer: "pizza",
  }
];

for( var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}


console.log("Scores");
for(var i=0;i<highScore.length;i++){
  var currentScore = highScore[i];
  console.log(currentScore.name,currentScore.score);
}