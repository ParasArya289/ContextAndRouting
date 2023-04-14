// import { useContext } from "react";

export const Card = ({ data }) => {
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
    </div>
  );
};
