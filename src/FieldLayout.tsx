import styles from "./styles/field.module.css";

interface FieldLayoutProps {
  field: string[];
  handleClick: (index: number) => void;
}

export const FieldLayout = ({ field, handleClick }: FieldLayoutProps) => {
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
};
