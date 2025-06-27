import { useSelector } from "react-redux";
import { InformationLayout } from "./InformationLayout";
import type { RootState } from "./store";

export const Information = () => {
  const { currentPlayer, isGameEnded, isDraw } = useSelector(
    (state: RootState) => state
  );

  let status = "";
  if (isDraw) status = "Ничья";
  else if (isGameEnded) status = `Победитель: ${currentPlayer}`;
  else status = `Ходит: ${currentPlayer}`;

  return <InformationLayout status={status} />;
};
