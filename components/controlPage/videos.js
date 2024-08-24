import VideoPlayer from "./videoPlayer";
import ControlButtons from "./controlButtons";
import { getVideos } from "@/lib/videos";

export default async function videos() {
  const videos = await getVideos();
  const videosList = videos.map((e) => {
    return <Video key={e.id} {...e} />;
  });
  return videosList;
}

function Video({ slug, title, video }) {
  return (
    <div className="group flex flex-col bg-natural-100 rounded-xl overflow-hidden">
      <VideoPlayer url={video} />
      <p dir="rtl" className="py-2 px-3 font-sh text-start">
        {title}
      </p>
      <ControlButtons slug={slug} file={video} type={"video"} />
    </div>
  );
}
