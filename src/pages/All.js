import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { NavLink } from "react-router-dom";
export const All = () => {
  const { data } = useContext(DataContext);
  const OpenTaskStyle = (done) =>
    done ? "3px dotted lime" : "3px dotted tomato";
  return (
    <div>
      {data?.map((el) => {
        const { id, title, isCompleted } = el;
        return (
          <div
            key={id}
            style={{
              minWidth: "450px",
              minHeight: "150px",
              border: OpenTaskStyle(isCompleted),
              margin: "2rem",
              borderRadius: "12px"
            }}
          >
            <h2 style={{ marginBottom: "2.5rem" }}>{title}</h2>
            <NavLink
              style={{
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
                backgroundColor: "black",
                padding: "0.9rem"
              }}
              to={`todos/${id}`}
            >
              Expand
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
