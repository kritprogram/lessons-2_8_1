import { actions } from "./store";

export type GameAction = ReturnType<
  typeof actions.setField | typeof actions.restartGame
>;

export interface GameState {
  field: string[];
  currentPlayer: "X" | "O";
  isGameEnded: boolean;
  isDraw: boolean;
}
