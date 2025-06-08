import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header/header.jsx";
import MainBody from "./components/MainBody/MainBody.jsx";
import usePexelsVideos from "./hooks/usePexelVideo.js";

export const VideoContext = createContext();
function App() {
  const [videoQuery, setVideoQuery] = useState({
    type: "popular",
    query: "",
    perPage: 15,
  });
  const { videos, loading, error } = usePexelsVideos({
    type: videoQuery.type,
    query: videoQuery.query,
    perPage: videoQuery.perPage,
  });
  const [featuredVideo, setFeaturedVideo] = useState(null)


  useEffect(() => {
    if (videos?.length > 0) {
      setFeaturedVideo(videos[0]);
    }
  }, [videos]);
  const valueProvider = {
    videoQuery,
    setVideoQuery,
    featuredVideo, setFeaturedVideo,
    videoData: videos,
    isLoading: loading,
    hasError: error,
  };
  return (
    <VideoContext.Provider value={valueProvider}>
      <main className="App">
        <Header />
        <MainBody />
      </main>
    </VideoContext.Provider>
  );
}

export default App;
