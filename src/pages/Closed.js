import { useContext } from "react";
import { Card } from "../components/Card";
import { CardWithButton } from "../components/CardWithButton";
import { DataContext } from "../context/dataContext";
export const Closed = () => {
  const { closeTodos } = useContext(DataContext);
  return (
    <div>
      <h1>Closed Todos</h1>
      {!closeTodos.length && <h4>No Closed Todos</h4>}
      {closeTodos.length > 0 && <h4>Total Closed {closeTodos.length}</h4>}
      {closeTodos.map((el) => (
        <CardWithButton data={el} />
      ))}
    </div>
  );
};
