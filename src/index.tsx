import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjectSteppeCoffee } from "./pages/ProjectSteppeCoffee/ProjectSteppeCoffee";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProjectSteppeCoffee />
  </StrictMode>,
);
