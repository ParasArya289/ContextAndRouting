import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContext, DataContextProvder } from "./context/dataContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { DataContext };

root.render(
  <StrictMode>
    <BrowserRouter>
      <DataContextProvder>
        <App />
      </DataContextProvder>
    </BrowserRouter>
  </StrictMode>
);
