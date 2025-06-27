import { useSelector, useDispatch } from "react-redux";
import { FieldLayout } from "./FieldLayout";
import { type RootState, type AppDispatch, actions } from "./store";

export const Field = () => {
  const field = useSelector((state: RootState) => state.field);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (index: number) => {
    dispatch(actions.setField(index));
  };

  return <FieldLayout field={field} handleClick={handleClick} />;
};
