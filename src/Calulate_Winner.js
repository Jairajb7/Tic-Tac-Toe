export function calculateWinner(squares) {
  // ToDO: given a game board, calculate the winner
  // if there is no winner you can return null

  // 0 1 2
  // 3 4 5
  // 6 7 8
  // all the current moves are stored in the list squares that
  // is passed into this function as a parameter
  const winning_pos = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //dig
    [0, 4, 8],
    [2, 4, 6]
  ];

 for(let i = 0; i < winning_pos.length; i++){
  const [a, b, c] = winning_pos[i];
  if (squares[a] && squares[a] === squares[b]  && squares[a] === squares[c]){
    return squares[a];
  }
 }
 return null;
}