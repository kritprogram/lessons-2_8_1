import { connect } from "react-redux";
import InformationLayout from "./InformationLayout";
import type { RootState } from "./store";
import { Component } from "react";

type InformationProps = {
  currentPlayer: string;
  isGameEnded: boolean;
  isDraw: boolean;
};

class Information extends Component<InformationProps> {
  constructor(props: InformationProps) {
    super(props);
  }
  render() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;

    let status = "";
    if (isDraw) status = "Ничья";
    else if (isGameEnded) status = `Победитель: ${currentPlayer}`;
    else status = `Ходит: ${currentPlayer}`;

    return <InformationLayout status={status} />;
  }
}

const mapStateToProps = (state: RootState): InformationProps => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
});

export default connect(mapStateToProps)(Information);
