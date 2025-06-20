import { useState } from "react";
import { GameLayout } from "./GameLayout";

const initialField: string[] = Array(9).fill("");

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [field, setField] = useState<string[]>(initialField);
  const [isGameEnded, setGameEnded] = useState<boolean>(false);
  const [isDraw, setDraw] = useState<boolean>(false);

  const resetGame = () => {
    setField(initialField);
    setCurrentPlayer("X");
    setGameEnded(false);
    setDraw(false);
  };

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      field={field}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      setField={setField}
      setCurrentPlayer={setCurrentPlayer}
      setGameEnded={setGameEnded}
      setDraw={setDraw}
      resetGame={resetGame}
    />
  );
};

export default Game;
