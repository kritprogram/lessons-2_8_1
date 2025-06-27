import { useDispatch, useSelector } from "react-redux";
import { GameLayout } from "./GameLayout";
import { actions, type AppDispatch, type RootState } from "./store";

const Game = () => {
  const { isGameEnded, isDraw } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const handleReset = () => dispatch(actions.restartGame());

  return (
    <GameLayout showReset={isGameEnded || isDraw} handleReset={handleReset} />
  );
};

export default Game;
