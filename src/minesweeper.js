
function createRow(size){
  let row = [];
  for (let i=0; i<size; i++)
  {
    row.push(' ');
  }
  return (row);
}

console.log("This is what a board with a guess and a bomb on it would look like:");
function newBoard(size){
  let board=[];
  for (let i=0; i<size; i++)
  {
    board.push(createRow(size))
  }
  return (board);
}

console.log(newBoard(3));
