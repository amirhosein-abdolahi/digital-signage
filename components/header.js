import Image from "next/image";

import logo from "@/assets/images/logo.png";
import Link from "next/link";

export default function Header({ children }) {
  return (
    <>
      <header className="w-full mb-5">
        <ul className="h-20 flex flex-row-reverse gap-3 justify-between items-center">
          <li>
            <Image src={logo} alt="logo" width={70} height={70} />
          </li>
          <li>
            <button className="h-10 px-4 text-white bg-secondary-2 rounded-lg hover:bg-secondary-3">
              <Link href={"/"}>بازگشت به صفحه اصلی</Link>
            </button>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}
