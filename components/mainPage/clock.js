"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const data = new Date();
      const showTime = data.getHours() + " : " + data.getMinutes();
      setTime(showTime);
    };

    const intervalId = setInterval(updateTime, 1000); // Update the time every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <h1 className="h-fit min-w-[180px] text-center pt-5 pb-3 text-nowrap rounded-xl text-natural-100 text-5xl bg-natural-500/70 shadow-main">
      {time}
    </h1>
  );
}
