"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Slider() {
  const [news, setNews] = useState();
  const [currentSlid, setCurrentSlid] = useState(0);
  const searchParams = useSearchParams();

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
    const getSpeed = () => {
      const params = new URLSearchParams(searchParams);
      const speed = params.get("new-speed");
      return speed ? speed : 5;
    };
    const speed = getSpeed();

    const interval = setInterval(() => {
      setCurrentSlid((prev) => (prev < news.length - 1 ? prev + 1 : 0));
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [news, searchParams]);

  if (!news) {
    return null;
  }

  return (
    <div className="w-full flex justify-center bg-secondary-1/80 rounded-2xl shadow-main">
      <div className="relative mx-4 w-full -translate-y-4">
        <Image
          src={news[currentSlid].image}
          alt={news[currentSlid].title}
          fill
          objectFit="cover"
          className="rounded-xl"
        />
        <div
          dir="rtl"
          className="absolute px-5 py-3 flex items-end w-full h-full text-natural-100 text-lg rounded-xl bg-gradient shadow-main"
        >
          {news[currentSlid].title}
        </div>
      </div>
    </div>
  );
}
