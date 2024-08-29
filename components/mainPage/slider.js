"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider() {
  const [news, setNews] = useState();
  const [currentSlid, setCurrentSlid] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/news");
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const result = await response.json();
      setNews(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlid((prev) => (prev < news.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [news]);

  if (!news) {
    return null;
  }

  return (
    <div className="col-span-2 w-full h-[180px]  flex justify-center bg-secondary-1 rounded-2xl shadow-main">
      <div className="relative mx-4 w-full h-[180px] -translate-y-4">
        <Image
          src={news[currentSlid].image}
          alt={news[currentSlid].title}
          fill
          objectFit="cover"
          className="rounded-xl"
        />
        <div
          dir="rtl"
          className="absolute px-8 py-6 flex items-end w-full h-full text-natural-100 text-xl rounded-xl bg-gradient shadow-main"
        >
          {news[currentSlid].title}
        </div>
      </div>
    </div>
  );
}
