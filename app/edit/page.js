import Frame from "@/components/frame";
import Header from "@/components/header";
import Modal from "@/components/modal";
import News from "@/components/news";
import Subtitle from "@/components/subtitle";
import Videos from "@/components/videos";

export default function Edit() {
  return (
    <main className="px-4">
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
          <Subtitle />
          <Subtitle />
          <Subtitle />
        </Frame>
      </div>
    </main>
  );
}
