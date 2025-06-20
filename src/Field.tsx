import { FieldLayout } from "./FieldLayout";
import { store } from "./store";

export const Field = () => {
  const { field } = store.getState();
  const handleClick = (index: number) => {
    store.dispatch({ type: "SET_FIELD", payload: { index } });
  };
  return <FieldLayout field={field} handleClick={handleClick} />;
};
