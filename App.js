import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id: "heading",},"Heading1");
const heading2 = React.createElement("h2",{id: "heading2",},"Heading2");
const container = React.createElement("div",{id: "container",},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);