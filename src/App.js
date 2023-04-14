import "./styles.css";

import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { All } from "./pages/All";
import { Open } from "./pages/Open";
import { Closed } from "./pages/Closed";
import { Todo } from "./pages/Todo";

export default function App() {
  const navStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline 3px" : "none",
      textUnderlineOffset: isActive ? "20px" : "none",
      color: isActive ? "grey" : "white",
      padding: "6px"
    };
  };
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "6px"
        }}
      >
        <NavLink style={navStyle} to="/">
          All
        </NavLink>
        <NavLink style={navStyle} to="/open">
          Open
        </NavLink>
        <NavLink style={navStyle} to="/closed">
          Closed
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/todos/:todoId" element={<Todo />} />
        <Route path="/open" element={<Open />} />
        <Route path="/closed" element={<Closed />} />
      </Routes>
    </div>
  );
}
