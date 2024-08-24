import Image from "next/image";
import ControlButtons from "./controlButtons";
import { getNews } from "@/lib/news";

export default async function News() {
  const news = await getNews();
  const newsList = news.map((e) => {
    return <New key={e.id} {...e} />;
  });
  return newsList;
}

function New({ slug, title, image }) {
  return (
    <div className="group rounded-xl bg-natural-100 overflow-hidden">
      <div className="relative h-28 rounded-lg">
        <Image src={image} alt={title} fill objectFit="cover" />
      </div>
      <h1 dir="rtl" className="py-2 px-3 font-sh text-sm text-start">
        {title}
      </h1>
      <ControlButtons slug={slug} file={image} type={"new"} />
    </div>
  );
}
