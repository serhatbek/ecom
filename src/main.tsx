import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "@routes/AppRouter";

import "@styles/global.scss";
createRoot(document.getElementById("root")!).render(AppRouter());
