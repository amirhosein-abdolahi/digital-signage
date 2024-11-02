"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "@/assets/images/logo.png";
import clear from "@/assets/icons/sun.png";
import cloud from "@/assets/icons/cloud.png";
import rain from "@/assets/icons/cloud and rain.png";
import fog from "@/assets/icons/foog.png";
import snow from "@/assets/icons/snowy.png";
import showers from "@/assets/icons/rainy.png";

export default function Weather() {
  const [weather, setWeather] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=35.6892&longitude=51.3890&daily=temperature_2m_max,temperature_2m_min,weathercode&current_weather=true&timezone=Asia/Tehran"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather.");
      }
      const result = await response.json();
      setWeather(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://one-api.ir/time/?token=923907:66cd7089e3b60&action=now"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch time.");
      }
      const result = await response.json();
      setTime(result.result);
    };
    fetchData();
  }, []);

  if (!weather || !time) {
    return <Fallback />;
  }

  return (
    <div className="row-span-1 px-5 py-4 bg-secondary-2/80 text-natural-100 rounded-xl shadow-main">
      <div dir="rtl" className="flex h-full gap-4">
        <div className="flex basis-2/5 pl-4 gap-4  items-start border-l-2 border-natural-100/50">
          <div className="flex flex-col *:text-nowrap">
            <h1 className="text-4xl">
              {parseInt(weather.current_weather.temperature)}
              {"°"}
            </h1>
            <h1 className="text-xl">{`${
              calc(weather.daily.weathercode[0]).name
            }`}</h1>
            <h1 className="text-xl">{`${parseInt(
              weather.daily.temperature_2m_max[0]
            )}° - ${parseInt(weather.daily.temperature_2m_min[0])}°`}</h1>
          </div>
          <Image
            src={calc(weather.daily.weathercode[0]).code}
            alt="today weather icon"
            height={50}
            width={50}
          />
        </div>
        <div className="flex basis-3/5 flex-col justify-between">
          <div className="flex justify-between items-center">
            <h1>{foundDays(time.day.name_week)[0]}</h1>
            <h1>
              {`${parseInt(weather.daily.temperature_2m_max[1])}° - ${parseInt(
                weather.daily.temperature_2m_min[1]
              )}°`}
            </h1>
            <Image
              src={calc(weather.daily.weathercode[1]).code}
              height={1}
              width={30}
              alt={"weather icon"}
            />
          </div>
          <div className="flex justify-between items-center">
            <h1>{foundDays(time.day.name_week)[1]}</h1>
            <h1>
              {`${parseInt(weather.daily.temperature_2m_max[2])}° - ${parseInt(
                weather.daily.temperature_2m_min[2]
              )}°`}
            </h1>
            <Image
              src={calc(weather.daily.weathercode[2]).code}
              height={1}
              width={30}
              alt={"weather icon"}
            />
          </div>
          <div className="flex justify-between items-center">
            <h1>{foundDays(time.day.name_week)[2]}</h1>
            <h1>
              {`${parseInt(weather.daily.temperature_2m_max[3])}° - ${parseInt(
                weather.daily.temperature_2m_min[3]
              )}°`}
            </h1>
            <Image
              src={calc(weather.daily.weathercode[3]).code}
              height={1}
              width={30}
              alt={"weather icon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Fallback() {
  return (
    <div className="row-span-1 px-5 py-4 flex justify-center items-center bg-secondary-2/80 text-natural-100 rounded-xl shadow-main">
      <Image
        src={logo}
        height={70}
        width={70}
        alt="logo"
        className="animate-pulse h-fit"
      />
    </div>
  );
}

// Weather map
// 0, 1 : clear
// 2, 3 : cloud
// 4_ : fog
// 5_, 6_ : rain
// 7_ : snow
// 8_ : showers

function calc(state) {
  const weather = {
    0: { code: clear, name: "آفتابی" },
    1: { code: clear, name: "آفتابی" },
    2: { code: cloud, name: "ابری" },
    3: { code: cloud, name: "ابری" },
    4: { code: fog, name: "مه" },
    5: { code: rain, name: "بارانی" },
    6: { code: rain, name: "بارانی" },
    7: { code: snow, name: "برفی" },
    8: { code: showers, name: "بارانی" },
  };
  return state / 10 < 1 ? weather[state] : weather[parseInt(state / 10)];
}

function foundDays(name) {
  let threeDays = [];
  const days = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  for (let i = 0; i < 3; i++) {
    if (name === days[i]) {
      threeDays.push(days[(i + 1) % 7]);
      threeDays.push(days[(i + 2) % 7]);
      threeDays.push(days[(i + 3) % 7]);
    }
  }
  return threeDays;
}
