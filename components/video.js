"use client";

import ReactPlayer from "react-player/lazy";

export default function Videos() {
  return (
    <div className="flex flex-col bg-natural-100 rounded-xl overflow-hidden">
      <ReactPlayer
        url="videos/test.mp4"
        height={"100%"}
        width={"100%"}
        controls={true}
      />
      <p className="py-2 px-3 font-sh text-end">
        جلسه مشترک اعضا شورا فنی دانشگاه تخصصی فناوری های نوین آمل با شرکت های
        مهندسین مشاور پروژه های عمرانی دانشگاه
      </p>
    </div>
  );
}
