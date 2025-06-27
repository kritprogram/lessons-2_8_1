import { Information } from "./Information";
import { Field } from "./Field";
import styles from "./styles/game.module.css";
export interface GameLayoutProps {
  showReset: boolean;
  handleReset: () => void;
}

export const GameLayout = ({ showReset, handleReset }: GameLayoutProps) => {
  return (
    <div className={styles.game}>
      <Information />
      <Field />
      {showReset && (
        <button onClick={handleReset} className={styles.resetButton}>
          Начать заново
        </button>
      )}
    </div>
  );
};
