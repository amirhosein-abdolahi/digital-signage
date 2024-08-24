import { getSubtitles } from "@/lib/subtitles";
import ControlButtons from "./controlButtons";

export default async function Subtitles() {
  const subtitles = await getSubtitles();
  const subtitlesList = subtitles.map((e) => {
    return <Subtitle key={e.id} {...e} />;
  });
  return subtitlesList;
}

function Subtitle({ id, text }) {
  return (
    <div className="group bg-natural-100 rounded-lg overflow-hidden">
      <p dir="rtl" className="mx-3 my-2 text-right">
        {text}
      </p>
      <ControlButtons slug={id} type={"subtitle"} />
    </div>
  );
}
