"use client";

import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({ url }) {
  return (
    <ReactPlayer url={url} height={"100%"} width={"100%"} controls={true} />
  );
}
