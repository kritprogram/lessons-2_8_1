import { useEffect, useState } from "react";
import { store } from "./store";
import { GameLayout } from "./GameLayout";
import type { GameState } from "./types";

const Game = () => {
  const [, setState] = useState<GameState>(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <GameLayout />;
};

export default Game;
