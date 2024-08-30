"use client";

import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import logo from "@/assets/images/logo.png";

export default function Header() {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();

  const handleButton = () => {
    const params = new URLSearchParams(searchParams);
    push(`/?${params.toString()}`);
  };

  return (
    <>
      <header className="w-full mb-5">
        <ul className="h-20 flex flex-row-reverse gap-3 justify-between items-center">
          <li>
            <Image src={logo} alt="logo" width={70} height={70} />
          </li>
          <li>
            <button
              className="h-10 px-4 text-white bg-secondary-2 rounded-lg hover:bg-secondary-3"
              onClick={handleButton}
            >
              بازگشت به صفحه اصلی
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}
