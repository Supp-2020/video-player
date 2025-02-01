import React, { createContext } from "react";
import Header from "./components/Header/header.jsx";

function App() {
  const AppContext = createContext();

  const valueProvider = {};
  return (
    <AppContext.Provider value={valueProvider}>
      <div className="App">
        <Header />
      </div>
    </AppContext.Provider>
  );
}

export default App;
