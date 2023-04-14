import { useContext } from "react";
import { Card } from "../components/Card";
import { CardWithButton } from "../components/CardWithButton";
import { DataContext } from "../context/dataContext";

export const Open = () => {
  const { openTodos } = useContext(DataContext);
  return (
    <div>
      <h1>Open Todos</h1>
      {!openTodos.length && <h4>No Open Todos</h4>}
      {openTodos.length > 0 && <h4>Total Open {openTodos.length}</h4>}
      {openTodos.map((el) => (
        <CardWithButton data={el} />
      ))}
    </div>
  );
};
