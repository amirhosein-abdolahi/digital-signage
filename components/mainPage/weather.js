import Image from "next/image";

import sun from "@/assets/icons/sun.png";
import cloud from "@/assets/icons/cloud.png";
import cloudAndRain from "@/assets/icons/cloud and rain.png";
import cloudAndSun from "@/assets/icons/cloud and sun.png";
import storm from "@/assets/icons/storm.png";

export default function Weather() {
  const data = {
    today: {
      icon: cloudAndSun,
      title: "نیمه ابری",
      temp: 24,
      tempRange: [16, 30],
    },
    days: [
      {
        icon: sun,
        day: "یکشنبه",
        tempRange: [17, 29],
      },
      {
        icon: cloud,
        day: "دوشنبه",
        tempRange: [18, 28],
      },
      {
        icon: cloudAndRain,
        day: "سه شنبه",
        tempRange: [19, 27],
      },
    ],
  };

  return (
    <div className="row-span-2 px-5 py-4 bg-secondary-2/80 text-natural-100 rounded-xl shadow-main">
      <div dir="rtl" className="flex h-full gap-4">
        <div className="flex basis-2/5 pl-5 flex-col justify-between border-l-2 border-natural-100/50">
          <div className="flex items-end gap-5">
            <div className="text-5xl">{data.today.temp}</div>
            <Image
              src={data.today.icon}
              alt="today weather"
              height={60}
              width={60}
            />
          </div>
          <h1 className="text-xl">{data.today.title}</h1>
          <h1 className="text-xl">{`${data.today.tempRange[1]} - ${data.today.tempRange[0]}`}</h1>
        </div>
        <div className="flex basis-3/5 flex-col justify-between">
          {data.days.map((item, key) => (
            <div key={key} className="flex justify-between items-center">
              <h1>{item.day}</h1>
              <h1>{`${item.tempRange[1]} - ${item.tempRange[0]}`}</h1>
              <Image src={item.icon} height={1} width={35} alt={`روز ${key}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
