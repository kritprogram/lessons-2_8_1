import React from "react";
import { Information } from "./Information";
import { Field } from "./Field";
import styles from "./styles/game.module.css";

interface GameLayoutProps {
  currentPlayer: "X" | "O";
  field: string[];
  isGameEnded: boolean;
  isDraw: boolean;
  setField: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<"X" | "O">>;
  setGameEnded: React.Dispatch<React.SetStateAction<boolean>>;
  setDraw: React.Dispatch<React.SetStateAction<boolean>>;
  resetGame: () => void;
}

export const GameLayout = ({
  currentPlayer,
  field,
  isGameEnded,
  isDraw,
  setField,
  setCurrentPlayer,
  setGameEnded,
  setDraw,
  resetGame,
}: GameLayoutProps) => {
  return (
    <div className={styles.game}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        field={field}
        currentPlayer={currentPlayer}
        setField={setField}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setGameEnded={setGameEnded}
        setDraw={setDraw}
      />
      <button onClick={resetGame} className={styles.resetButton}>
        Начать заново
      </button>
    </div>
  );
};
