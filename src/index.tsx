import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export { default as PrefectureItem } from "./components/PrefectureItem";
export { default as GetPrefecturesJson } from "./components/GetPrefecturesJson";

reportWebVitals();
