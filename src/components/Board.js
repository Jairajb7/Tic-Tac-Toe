import React from "react";
import Square from "./Square";

// square is a list of Xs and Os already played
// Square is a component that helps display the moves
const Board = ({ squares, onClick }) => ( 
    
    <div className="board">
        {console.log("board square", squares)}
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;