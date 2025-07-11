import Information from "./Information";
import Field from "./Field";
import styles from "./styles/game.module.css";
import { Component, type ReactNode } from "react";
export interface GameLayoutProps {
  showReset: boolean;
  handleReset: () => void;
}

export class GameLayout extends Component<GameLayoutProps> {
  constructor(props: GameLayoutProps) {
    super(props);
  }

  render(): ReactNode {
    const { showReset, handleReset } = this.props;

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
  }
}
