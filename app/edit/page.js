import Frame from "@/components/controlPage/frame";
import Header from "@/components/controlPage/header";
import Modal from "@/components/controlPage/modal";
import News from "@/components/controlPage/news";
import Subtitles from "@/components/controlPage/subtitles";
import Videos from "@/components/controlPage/videos";

export default function Edit() {
  return (
    <main className="px-4 mb-10">
      <Modal />
      <Header />
      <div className="flex justify-center gap-10">
        <Frame title={"اطلاعیه ها"} modal={"new"}>
          <News />
        </Frame>
        <Frame title={"ویدیوها"} modal={"video"}>
          <Videos />
        </Frame>
        <Frame title={"زیرنویس"} modal={"subtitle"}>
          <Subtitles />
        </Frame>
      </div>
    </main>
  );
}
