import type { GameState, GameAction } from "./types.ts";

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

const checkWinner = (field: string[], player: "X" | "O"): boolean =>
  WIN_PATTERNS.some((pattern) => pattern.every((i) => field[i] === player));

export const initialState: GameState = {
  field: Array(9).fill(""),
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
};

export function reducer(state = initialState, action: GameAction): GameState {
  switch (action.type) {
    case "SET_FIELD": {
      const { index } = action.payload;
      if (state.field[index] !== "" || state.isGameEnded) return state;

      const newField = [...state.field];
      newField[index] = state.currentPlayer;

      const hasWon = checkWinner(newField, state.currentPlayer);
      const isDraw = !hasWon && newField.every((cell) => cell !== "");

      return {
        field: newField,
        currentPlayer:
          hasWon || isDraw
            ? state.currentPlayer
            : state.currentPlayer === "X"
            ? "O"
            : "X",
        isGameEnded: hasWon,
        isDraw,
      };
    }

    case "RESTART_GAME":
      return initialState;

    default:
      return state;
  }
}
