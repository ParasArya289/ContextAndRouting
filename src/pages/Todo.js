import { Card } from "../components/Card";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { CardWithButton } from "../components/CardWithButton";
export const Todo = () => {
  const { todoId } = useParams();
  const { data } = useContext(DataContext);
  const findTodo = data.find(({ id }) => id === +todoId);
  console.log(findTodo);
  return (
    <div>
      <CardWithButton data={findTodo} />
    </div>
  );
};
