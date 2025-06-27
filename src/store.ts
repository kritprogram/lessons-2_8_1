import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const setField = (index: number) =>
  ({ type: "SET_FIELD", payload: { index } } as const);

export const restartGame = () => ({ type: "RESTART_GAME" } as const);

export const actions = { setField, restartGame };
