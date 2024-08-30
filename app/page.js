import Image from "next/image";
import Link from "next/link";

import background from "@/assets/images/university.jpg";
import logo from "@/assets/images/logo-with-title.png";
import Clock from "@/components/mainPage/clock";
import Subtitle from "@/components/mainPage/subtitle";
import Slider from "@/components/mainPage/slider";
import Player from "@/components/mainPage/player";
import Weather from "@/components/mainPage/weather";
import Date from "@/components/mainPage/date";
import NavButton from "@/components/mainPage/navButton";

export default function Home() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={background}
          alt="background image"
          fill
          className="scale-125 -translate-y-24"
        />
        <main className="absolute w-full h-screen bg-black/45">
          <header className="relative w-full min-h-[180px] flex justify-center items-center">
            <div className="absolute pt-3 top-5 left-10 rounded-xl bg-natural-100/70 shadow-main">
              <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <div className="w-fit h-fit px-32 py-6 bg-primary-1/70 rounded-xl shadow-main">
              <h1 className="text-natural-100 text-5xl">
                دانشگاه تخصصی فناوری های نوین آمل
              </h1>
            </div>
            <NavButton />
          </header>
          <section className="grid h-[540px] mx-10 grid-flow-col gap-x-10 gap-y-5 grid-cols-3 grid-rows-3">
            <Player />
            <Slider />
            <Weather />
            <Date />
          </section>
          <footer className="flex mx-10 justify-center items-center gap-7 h-[140px]">
            <Subtitle />
            <Clock />
          </footer>
        </main>
      </div>
    </>
  );
}
