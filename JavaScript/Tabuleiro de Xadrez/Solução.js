var size = 8;

function chessboard(size) {
  var boardResult = "";
  
  function lineBoard(size, line) {
    var result = "";    
    for (var i = 0; i < size; i++) {      
      if (i % 2 === 0) {
        line % 2 === 0 ? result += "#" : result += " "
      } else {
        line % 2 === 0 ? result += " " : result += "#"
      }
    }    
    return result;
  }

  for (var j = 0; j < size; j++) {
    boardResult += lineBoard(size, j);
    boardResult += "\n";
  }
    
  return boardResult;
}

console.log(chessboard(size));