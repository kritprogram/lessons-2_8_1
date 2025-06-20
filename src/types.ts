export type Player = "X" | "O";

export interface GameState {
  field: string[];
  currentPlayer: Player;
  isGameEnded: boolean;
  isDraw: boolean;
}

export interface SetFieldAction {
  type: "SET_FIELD";
  payload: { index: number };
}

export interface RestartGameAction {
  type: "RESTART_GAME";
}

export type GameAction = SetFieldAction | RestartGameAction;
