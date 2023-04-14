import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../utils/utils";

export const DataContext = createContext();

export const DataContextProvder = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/todos");
        const {
          data: { todos }
        } = res;
        setData(todos);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);

  const toggleOpenClose = (ID) => {
    const newData = data.map((el) =>
      el.id === ID ? { ...el, isCompleted: !el.isCompleted } : el
    );
    setData(newData);
  };

  const openTodos = data.filter(({ isCompleted }) => isCompleted === true);
  const closeTodos = data.filter(({ isCompleted }) => isCompleted === false);

  return (
    <DataContext.Provider
      value={{ data, openTodos, closeTodos, toggleOpenClose }}
    >
      {children}
    </DataContext.Provider>
  );
};
