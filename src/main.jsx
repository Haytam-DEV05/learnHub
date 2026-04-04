import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./Context/UserAuthetication.jsx";
import { CourseProvider } from "./Context/CourseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CourseProvider>
        <App />
      </CourseProvider>
    </UserProvider>
  </StrictMode>,
);
