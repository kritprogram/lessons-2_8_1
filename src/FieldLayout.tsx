import { Component } from "react";

interface FieldLayoutProps {
  field: string[];
  handleClick: (index: number) => void;
}

class FieldLayout extends Component<FieldLayoutProps> {
  render() {
    const { field, handleClick } = this.props;

    return (
      <div className="grid grid-cols-3 gap-1.5">
        {field.map((cell, index) => (
          <button
            key={index}
            className="w-20 h-20 text-3xl flex items-center justify-center cursor-pointer bg-gray-100 border rounded"
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
