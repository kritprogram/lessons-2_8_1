import { connect } from "react-redux";
import { GameLayout } from "./GameLayout";
import { actions, type RootState } from "./store";
import { Component } from "react";

type StateProps = {
  isGameEnded: boolean;
  isDraw: boolean;
};
type DispatchProps = {
  restartGame: () => void;
};

type GameProps = StateProps & DispatchProps;
class Game extends Component<GameProps> {
  constructor(props: GameProps) {
    super(props);
  }
  handleReset = () => this.props.restartGame();

  render() {
    const { isGameEnded, isDraw } = this.props;

    return (
      <GameLayout
        showReset={isGameEnded || isDraw}
        handleReset={this.handleReset}
      />
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
});

const mapDispatchToProps: DispatchProps = {
  restartGame: actions.restartGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
