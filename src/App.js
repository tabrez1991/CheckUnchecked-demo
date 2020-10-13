import React from "react";
import Country from "./components/Country";
import SelectedCountry from "./components/SelectedCountry";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Country />
      <SelectedCountry />
    </div>
  );
}
