import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../Calulate_Winner";

const Game = () => {
    const [history, setHistory] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history);
    console.log("WINNER", winner)
    const squares = history;
    const handleClick = (i) => {
        if (winner || squares[i]) return;
        if (xIsNext) {
            squares[i] = "X";
        } else {
            squares[i] = "O";
        }
        setHistory(squares);
        setXisNext(!xIsNext);
    }
    return (
        <>
            <Board squares={history} onClick={handleClick}/>
            <div className="game">
                <p>Winner is: {winner} </p>
            </div>
        </>
    )
}

export default Game;



