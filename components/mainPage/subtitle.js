"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Subtitle() {
  const searchParams = useSearchParams();
  const [subs, setSubs] = useState([]);
  const [speed, setSpeed] = useState(60);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const getSpeed = () => {
      const speed = params.get("subtitle-speed");
      if (speed) {
        setSpeed(speed);
      }
    };
    getSpeed();

    const fetchData = async () => {
      const response = await fetch("/api/subtitles");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setSubs(result);
    };

    fetchData();
  }, [setSubs, searchParams]);

  return (
    <div className="relative flex items-center w-full h-[80px] overflow-hidden rounded-xl bg-primary-2/80 shadow-main">
      <div
        dir="rtl"
        className="absolute right-0 flex gap-20 animate-ticker"
        style={{
          animation: `ticker ${speed.toString()}s linear infinite`,
        }}
      >
        {subs.length > 0 &&
          subs.map((e, i) => {
            return (
              <div key={i} className="flex items-center gap-20">
                <p className="text-3xl text-nowrap text-natural-100">
                  {e.text}
                </p>
                {i !== subs.length - 1 ? <Icon /> : null}
              </div>
            );
          })}
      </div>
    </div>
  );
}

function Icon() {
  return (
    <svg
      width="54"
      height="20"
      viewBox="0 0 54 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7.57554"
        cy="7.57554"
        r="7.57554"
        transform="matrix(1 0 0 -1 19.4245 17.2876)"
        fill="#E3E3E3"
      />
      <path
        d="M1.45683 8.87088C0.809352 9.24471 0.809353 10.1793 1.45683 10.5531L13.1115 17.2819C13.759 17.6557 14.5683 17.1885 14.5683 16.4408L14.5683 2.98316C14.5683 2.23551 13.759 1.76823 13.1115 2.14205L1.45683 8.87088Z"
        fill="#E3E3E3"
      />
      <path
        d="M52.5432 10.5532C53.1906 10.1794 53.1906 9.24481 52.5432 8.87098L40.8885 2.14215C40.241 1.76833 39.4317 2.23561 39.4317 2.98326V16.4409C39.4317 17.1886 40.241 17.6558 40.8885 17.282L52.5432 10.5532Z"
        fill="#E3E3E3"
      />
    </svg>
  );
}
