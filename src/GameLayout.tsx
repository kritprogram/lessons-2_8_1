import Information from "./Information";
import Field from "./Field";
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
      <div className="flex flex-col items-center gap-5">
        <Information />
        <Field />
        {showReset && (
          <button
            onClick={handleReset}
            className="mt-5 px-5 py-2 text-base cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Начать заново
          </button>
        )}
      </div>
    );
  }
}
