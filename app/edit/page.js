import Frame from "@/components/frame";
import Header from "@/components/header";
import Modal from "@/components/modal";
import News from "@/components/news";
import Subtitle from "@/components/subtitle";
import Video from "@/components/video";

export default function Edit() {
  return (
    <main className="px-4">
      <Modal />
      <Header />
      <div className="flex gap-10">
        <Frame title={"اطلاعیه ها"} modal={"new"}>
          <News />
        </Frame>
        <Frame title={"ویدیوها"} modal={"video"}>
          <Video />
        </Frame>
        <Frame title={"زیرنویس"} modal={"subtitle"}>
          <Subtitle />
          <Subtitle />
          <Subtitle />
        </Frame>
      </div>
    </main>
  );
}
