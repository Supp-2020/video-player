import React, { createContext, useState } from "react";
import Header from "./components/Header/header.jsx";
import MainBody from "./components/MainBody/MainBody.jsx";
import usePexelsVideos from "./hooks/usePexelVideo.js";

function App() {
  const VideoContext = createContext();
  const [videoQuery, setVideoQuery] = useState({
    type: "popular",
    query: "",
    perPage: 15,
  });
  const { videos, loading, error } = usePexelsVideos(
    videoQuery.type,
    videoQuery.query,
    videoQuery.perPage
  );
  const valueProvider = {
    videoQuery,
    setVideoQuery,
    videoData: videos,
    isLoading: loading,
    hasError: error,
  };
  return (
    <VideoContext.Provider value={valueProvider}>
      <div className="App">
        <Header />
        <MainBody />
      </div>
    </VideoContext.Provider>
  );
}

export default App;
