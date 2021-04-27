
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
}

function onClickRow1Column2() {
  if(ticTacToeMatrix[0][1]===""){
  turn();
  ticTacToeMatrix[0][1] = currentPlayer;
  document.getElementById("row1Column2").innerHTML=ticTacToeMatrix[0][1];}
}
function onClickRow1Column3() {
  if(ticTacToeMatrix[0][2]===""){
  turn();
  ticTacToeMatrix[0][2] = currentPlayer;
  document.getElementById("row1Column3").innerHTML=ticTacToeMatrix[0][2];}
}

function onClickRow2Column1() {
  if(ticTacToeMatrix[1][0]===""){
  turn();
  ticTacToeMatrix[1][0] = currentPlayer;
  document.getElementById("row2Column1").innerHTML=ticTacToeMatrix[1][0];}
}

function onClickRow2Column2() {
  if(ticTacToeMatrix[1][1]===""){
  turn();
  ticTacToeMatrix[1][1] = currentPlayer;
  document.getElementById("row2Column2").innerHTML=ticTacToeMatrix[1][1];}
}

function onClickRow2Column3() {
  if(ticTacToeMatrix[1][2]===""){
  turn();
  ticTacToeMatrix[1][2] = currentPlayer;
  document.getElementById("row2Column3").innerHTML=ticTacToeMatrix[1][2];}
}

function onClickRow3Column1() {
  if(ticTacToeMatrix[2][0]===""){
  turn();
  ticTacToeMatrix[2][0] = currentPlayer;
  document.getElementById("row3Column1").innerHTML=ticTacToeMatrix[2][0];}
}

function onClickRow3Column2() {
  if(ticTacToeMatrix[2][1]===""){
  turn();
  ticTacToeMatrix[2][1] = currentPlayer;
  document.getElementById("row3Column2").innerHTML=ticTacToeMatrix[2][1];}
}

function onClickRow3Column3() {
  if(ticTacToeMatrix[2][2]===""){
  turn();
  ticTacToeMatrix[2][2] = currentPlayer;
  document.getElementById("row3Column3").innerHTML=ticTacToeMatrix[2][2];}
}

