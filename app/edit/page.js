import Frame from "@/components/frame";
import Header from "@/components/header";
import Modal from "@/components/modal";
import New from "@/components/new";
import Subtitle from "@/components/subtitle";
import Video from "@/components/video";

export default function Edit() {
  async function onClose() {
    "use server";
    console.log("close");
  }

  async function onOk() {
    "use server";
    console.log("ok");
  }

  return (
    <main className="px-4">
      <Modal title={"hello"} onClose={onClose} onOk={onOk} />
      <Header />
      <div className="flex gap-10">
        <Frame title={"اطلاعیه ها"} modal={"new"}>
          <New />
          <New />
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
