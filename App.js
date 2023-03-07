import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id: "heading",},"Heading1");
const heading2 = React.createElement("h2",{id: "heading2",},"Heading2");
const heading3 = React.createElement("h2",{id: "heading3",},"Heading3");
const heading4 = React.createElement("h2",{id: "heading4",},"Heading4");
const container = React.createElement("div",{id: "container",},[heading,heading2,heading3.heading4]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);