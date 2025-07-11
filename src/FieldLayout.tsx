import { Component } from "react";
import styles from "./styles/field.module.css";

interface FieldLayoutProps {
  field: string[];
  handleClick: (index: number) => void;
}

class FieldLayout extends Component<FieldLayoutProps> {
  render() {
    const { field, handleClick } = this.props;

    return (
      <div className={styles.field}>
        {field.map((cell, index) => (
          <button
            key={index}
            className={styles.cell}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
    );
  }
}

export default FieldLayout;
