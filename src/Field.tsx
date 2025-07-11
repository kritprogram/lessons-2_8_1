import { connect } from "react-redux";
import FieldLayout from "./FieldLayout";
import { actions } from "./store";
import type { RootState } from "./store";
import { Component } from "react";

type StateProps = {
  field: string[];
};

type DispatchProps = {
  setField: (index: number) => void;
};

type FieldProps = StateProps & DispatchProps;

class Field extends Component<FieldProps> {
  handleClick = (index: number) => {
    this.props.setField(index);
  };

  render() {
    return (
      <FieldLayout field={this.props.field} handleClick={this.handleClick} />
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  field: state.field,
});

const mapDispatchToProps: DispatchProps = {
  setField: actions.setField,
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
