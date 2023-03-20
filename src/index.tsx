import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page from "./Page";

const initialData = [
  {
    title: "Title 1",
    description: "Desc 1",
    type: "Banner",
  },
  {
    title: "Title 2",
    description: "Desc 2",
    type: "Multi_Column",
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Page initialData={initialData} />
  </React.StrictMode>
);
