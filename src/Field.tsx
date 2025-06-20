import React from "react";
import { FieldLayout } from "./FieldLayout";

interface FieldProps {
  field: string[];
  currentPlayer: "X" | "O";
  isGameEnded: boolean;
  setField: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<"X" | "O">>;
  setGameEnded: React.Dispatch<React.SetStateAction<boolean>>;
  setDraw: React.Dispatch<React.SetStateAction<boolean>>;
}

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Field = ({
  field,
  currentPlayer,
  isGameEnded,
  setField,
  setCurrentPlayer,
  setGameEnded,
  setDraw,
}: FieldProps) => {
  const handleClick = (index: number) => {
    if (isGameEnded || field[index] !== "") return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    const winner = WIN_PATTERNS.some((pattern) =>
      pattern.every((i) => newField[i] === currentPlayer)
    );
    if (winner) {
      setGameEnded(true);
      return;
    }

    if (!newField.includes("")) {
      setDraw(true);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return <FieldLayout field={field} handleClick={handleClick} />;
};
