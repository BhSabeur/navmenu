import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const linksArray = [
    { title: "Home", subMenu: null },
    {
      title: "Services",
      subMenu: ["For Entrepreneurs", "For Students", "For Hobbyists"]
    },
    { title: "Contact", subMenu: null }
  ];

  return (
    <div>
      <Navbar linksArray={linksArray} />
    </div>
  );
}

export default App;
