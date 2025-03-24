import React, { createContext } from "react";
import Header from "./components/Header/header.jsx";
import MainBody from "./components/MainBody/MainBody.jsx";

function App() {
  const AppContext = createContext();

  const valueProvider = {};
  return (
    <AppContext.Provider value={valueProvider}>
      <div className="App">
        <Header />
        <MainBody />
      </div>
    </AppContext.Provider>
  );
}

export default App;
