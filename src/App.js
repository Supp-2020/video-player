import React, { createContext } from "react";
import Header from "./components/Header/header.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";

function App() {
  const AppContext = createContext();

  const valueProvider = {};
  return (
    <AppContext.Provider value={valueProvider}>
      <div className="App">
        <Header />
        <VideoPlayer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
