"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SpeedControl({ type }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [num, setNum] = useState();

  const handleInput = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (type === "زیرنویس") {
      if (num) {
        params.set("subtitle-speed", num);
      } else {
        params.delete("subtitle-speed");
      }
    } else if (type === "اطلاعیه ها") {
      if (num) {
        params.set("new-speed", num);
      } else {
        params.delete("new-speed");
      }
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className="w-fit self-end text-nowrap flex gap-3 text-xl text-white"
    >
      <div className="px-3 py-2 flex gap-3 rounded-xl bg-secondary-2">
        <label>سرعت پخش : </label>
        <input
          type="text"
          className="max-w-[50px] bg-secondary-2 text-center"
          onChange={handleInput}
          defaultValue={
            type === "زیرنویس"
              ? searchParams.get("subtitle-speed")?.toString()
              : searchParams.get("new-speed")?.toString()
          }
        />
        <h1>ثانیه</h1>
      </div>
      <button
        type="submit"
        className="px-3 text-secondary-2 hover:text-white rounded-xl border-[3px] border-secondary-2 hover:bg-secondary-2"
      >
        ثبت
      </button>
    </form>
  );
}
