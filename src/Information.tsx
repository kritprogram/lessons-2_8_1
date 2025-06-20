import { InformationLayout } from "./InformationLayout";

interface InformationProps {
  currentPlayer: "X" | "O";
  isGameEnded: boolean;
  isDraw: boolean;
}

export const Information = ({
  currentPlayer,
  isGameEnded,
  isDraw,
}: InformationProps) => {
  let status = "";
  if (isDraw) {
    status = "Ничья";
  } else if (isGameEnded) {
    status = `Победитель: ${currentPlayer}`;
  } else {
    status = `Ходит: ${currentPlayer}`;
  }

  return <InformationLayout status={status} />;
};
