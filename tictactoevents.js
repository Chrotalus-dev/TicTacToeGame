
var ticTacToeMatrix = [
["","",""],
["","",""],
[ "","",""]];

const playerOne = 'X';
const playerTwo = 'O';
var currentPlayer="";

function turn(){
  if(currentPlayer===""){
    currentPlayer = playerOne;
  }
 else if(currentPlayer==='X'){
    currentPlayer = playerTwo;
  }
  else{
    currentPlayer = playerOne;
  }
}

function onClickRow1Column1() {
  if(ticTacToeMatrix[0][0]===""){
  turn();
  ticTacToeMatrix[0][0] = currentPlayer;
  document.getElementById("row1Column1").innerHTML=ticTacToeMatrix[0][0];}
  calculateWinner(ticTacToeMatrix);
}

function onClickRow1Column2() {
  if(ticTacToeMatrix[0][1]===""){
  turn();
  ticTacToeMatrix[0][1] = currentPlayer;
  document.getElementById("row1Column2").innerHTML=ticTacToeMatrix[0][1];}
  calculateWinner(ticTacToeMatrix);
}
function onClickRow1Column3() {
  if(ticTacToeMatrix[0][2]===""){
  turn();
  ticTacToeMatrix[0][2] = currentPlayer;
  document.getElementById("row1Column3").innerHTML=ticTacToeMatrix[0][2];}
  calculateWinner(ticTacToeMatrix);
}

function onClickRow2Column1() {
  if(ticTacToeMatrix[1][0]===""){
  turn();
  ticTacToeMatrix[1][0] = currentPlayer;
  document.getElementById("row2Column1").innerHTML=ticTacToeMatrix[1][0];}
  calculateWinner(ticTacToeMatrix);
}

function onClickRow2Column2() {
  if(ticTacToeMatrix[1][1]===""){
  turn();
  ticTacToeMatrix[1][1] = currentPlayer;
  document.getElementById("row2Column2").innerHTML=ticTacToeMatrix[1][1];}
  calculateWinner(ticTacToeMatrix);
}

function onClickRow2Column3() {
  if(ticTacToeMatrix[1][2]===""){
  turn();
  ticTacToeMatrix[1][2] = currentPlayer;
  document.getElementById("row2Column3").innerHTML=ticTacToeMatrix[1][2];}
  calculateWinner(ticTacToeMatrix);
}

function onClickRow3Column1() {
  if(ticTacToeMatrix[2][0]===""){
  turn();
  ticTacToeMatrix[2][0] = currentPlayer;
  document.getElementById("row3Column1").innerHTML=ticTacToeMatrix[2][0];}
  calculateWinner(ticTacToeMatrix);
}

function onClickRow3Column2() {
  if(ticTacToeMatrix[2][1]===""){
  turn();
  ticTacToeMatrix[2][1] = currentPlayer;
  document.getElementById("row3Column2").innerHTML=ticTacToeMatrix[2][1];}
  calculateWinner(ticTacToeMatrix);
}

function onClickRow3Column3() {
  if(ticTacToeMatrix[2][2]===""){
  turn();
  ticTacToeMatrix[2][2] = currentPlayer;
  document.getElementById("row3Column3").innerHTML=ticTacToeMatrix[2][2];}
  calculateWinner(ticTacToeMatrix);
}


function calculateWinner() {
  for(let i=0;i<=2;i++){
  if(ticTacToeMatrix[i][0]!=="" && ticTacToeMatrix[i][0]===ticTacToeMatrix[i][1] && ticTacToeMatrix[i][0]===ticTacToeMatrix[i][2]){
    document.getElementById("winner").innerHTML="The winner is "+ ticTacToeMatrix[i][0];
    break;
  }
}
  for(let j=0;j<=2;j++){
    if(ticTacToeMatrix[0][j]!=="" && ticTacToeMatrix[0][j]===ticTacToeMatrix[1][j] && ticTacToeMatrix[0][j]===ticTacToeMatrix[2][j]){
      document.getElementById("winner").innerHTML="The winner is "+ ticTacToeMatrix[0][j];
      break;
    }
  }
  if(ticTacToeMatrix[0][0]!=="" && ticTacToeMatrix[0][0]===ticTacToeMatrix[1][1] && ticTacToeMatrix[0][0]===ticTacToeMatrix[2][2]){
    document.getElementById("winner").innerHTML="The winner is "+ ticTacToeMatrix[0][0];
  }
  if(ticTacToeMatrix[0][2]!=="" && ticTacToeMatrix[0][2]===ticTacToeMatrix[1][1] && ticTacToeMatrix[0][2]===ticTacToeMatrix[2][0]){
   document.getElementById("winner").innerHTML="The winner is "+ ticTacToeMatrix[0][2];
  }

}