var ticTacToeMatrix = [
["","",""],
["","",""],
[ "","",""]];
var player=null;

function currentPlayer(player)
{
  if (player===null){
  player = "X";
}
  else if(player==="X"){
  player= "O";
}
  else{
    player = "X";
  }
  return player;
}

function onClickRow1Column1() {
  ticTacToeMatrix[0][0] = currentPlayer(player);
  document.getElementById("row1Column1").innerHTML=ticTacToeMatrix[0][0];
}


