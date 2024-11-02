"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "@/assets/images/logo.png";

export default function Date() {
  const miladiMonths = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const ghamariMonths = {
    1: "محرم",
    2: "صفر",
    3: "ربیع الاول",
    4: "ربیع الثانی",
    5: "جمادی الاولی",
    6: "جمادی‌الثانی",
    7: "رجب",
    8: "شعبان",
    9: "رمضان",
    10: "شوال",
    11: "ذی‌القعده",
    12: "ذی‌الحجة",
  };

  const [date, setDate] = useState();
  const [ghamari, setGhamari] = useState();
  const [miladi, setMiladi] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://one-api.ir/time/?token=923907:66cd7089e3b60&action=now"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch date.");
      }
      const result = await response.json();
      setDate(result.result);
      setGhamari({
        day: result.result.date.ghamari.split("/")[2],
        month: ghamariMonths[result.result.date.ghamari.split("/")[1]],
      });
      setMiladi({
        day: parseInt(result.result.date.miladi.split("/")[2]),
        month: miladiMonths[result.result.date.miladi.split("/")[1]],
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchTime = async () => {
      const response = await fetch(
        "https://one-api.ir/owghat/?token=923907:66cd7089e3b60&city=آمل"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch time.");
      }
      const result = await response.json();
      setTime(result.result);
    };
    fetchTime();
  }, []);

  if (!date || !time) {
    return <Fallback />;
  }

  return (
    <div
      dir="rtl"
      className="row-span-1 flex h-full px-5 py-4 text-nowrap bg-secondary-1/80 text-natural-700 rounded-xl"
    >
      <div className="flex pl-5 flex-col justify-around text-lg border-l-2 border-natural-700/50">
        <h1 className="text-3xl">{`${date.day.number} ${date.month.name}`}</h1>
        <h1>{`${ghamari.day} ${ghamari.month}`}</h1>
        <h1
          dir="ltr"
          className="text-left"
        >{`${miladi.day} ${miladi.month}`}</h1>
      </div>
      <div className="flex flex-col gap-1 justify-around items-center w-full">
        <div className="flex items-center *:px-3 *:text-center">
          <div>
            <h1>اذان صبح</h1>
            <h1>{time.azan_sobh}</h1>
          </div>
          <div>
            <h1>طلوع آفتاب</h1>
            <h1>{time.toloe_aftab}</h1>
          </div>
          <div>
            <h1>اذان ظهر</h1>
            <h1>{time.azan_zohre}</h1>
          </div>
        </div>
        <div className="flex items-center *:px-2 *:text-center">
          <div>
            <h1>غروب آفتاب</h1>
            <h1>{time.ghorob_aftab}</h1>
          </div>
          <div>
            <h1>اذان مغرب</h1>
            <h1>{time.azan_maghreb}</h1>
          </div>
          <div>
            <h1>نیمه شب</h1>
            <h1>{time.nime_shabe_sharie}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fallback() {
  return (
    <div
      dir="rtl"
      className="row-span-1 h-full px-5 py-4 flex justify-center items-center bg-secondary-1/80 rounded-xl"
    >
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
