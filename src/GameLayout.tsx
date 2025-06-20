import { Information } from "./Information";
import { Field } from "./Field";
import styles from "./styles/game.module.css";
import { store } from "./store";

export const GameLayout = () => {
  return (
    <div className={styles.game}>
      <Information />
      <Field />
      <button
        onClick={() => {
          store.dispatch({ type: "RESTART_GAME" });
        }}
        className={styles.resetButton}
      >
        Начать заново
      </button>
    </div>
  );
};
