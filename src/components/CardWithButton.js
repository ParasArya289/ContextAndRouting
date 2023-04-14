import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export const CardWithButton = ({ data }) => {
  const { toggleOpenClose } = useContext(DataContext);
  const OpenTaskStyle = (done) =>
    done ? "3px dotted lime" : "3px dotted tomato";
  return (
    <div
      style={{
        minWidth: "450px",
        border: OpenTaskStyle(data?.isCompleted),
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <p style={{ fontWeight: "600" }}>
        <i>{data?.isCompleted ? "Completed" : "Not Completed"}</i>
      </p>
      <button
        onClick={() => toggleOpenClose(data?.id)}
        style={{
          color: "white",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "black",
          padding: "1rem",
          margin: "12px",
          cursor: "pointer"
        }}
      >
        {data?.isCompleted ? "Uncheck" : "Check"}
      </button>
    </div>
  );
};
