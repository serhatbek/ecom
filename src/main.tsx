import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainLayout } from "./layouts";

createRoot(document.getElementById("root")!).render(<MainLayout />);
