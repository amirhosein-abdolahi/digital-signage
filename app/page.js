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
            <Link
              href={"/edit"}
              className="absolute p-1 top-5 right-7 bg-primary-1 rounded-lg"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
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
