"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Player() {
  const [videos, setVideos] = useState();
  const [currentPlay, setCurrentPlay] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/videos");
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const result = response.json();
      result.then((result) => {
        setVideos(result);
      });
    };
    fetchData();
  }, []);

  const handleVideosIndex = () => {
    if (currentPlay < videos.length - 1) {
      setCurrentPlay(currentPlay + 1);
    } else {
      setCurrentPlay(0);
    }
  };

  if (!videos) {
    return null;
  }

  return (
    <div className="col-span-2 row-span-3 self-center h-fit bg-primary-1/80 rounded-2xl shadow-main">
      <div className="mx-6 rounded-xl shadow-main overflow-auto -translate-y-6">
        <div className="w-full h-full bg-black">
          <ReactPlayer
            url={videos[currentPlay].video}
            width={"100%"}
            height={"100%"}
            controls
            playing={true}
            onEnded={handleVideosIndex}
          />
        </div>
      </div>
    </div>
  );
}
