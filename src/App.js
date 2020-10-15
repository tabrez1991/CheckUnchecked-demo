import React from "react";
import Country from "./components/Country";
import SelectedCountry from "./components/SelectedCountry";
import Header from "./components/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Country />
      <SelectedCountry />
    </div>
  );
}
