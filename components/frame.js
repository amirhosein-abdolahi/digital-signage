import Link from "next/link";

export default function Frame({ title, modal, children }) {
  return (
    <div className="h-full text-center flex flex-col gap-4">
      <h1 className="font-sh text-4xl text-natural-900">{title}</h1>
      <div className="p-4 grid gap-5 rounded-2xl border-4 border-secondary-2">
        {children}
        <div className="w-full flex justify-center">
          <Link href={`/edit?modal=${modal}`}>
            <div className="size-14 flex items-center justify-center border-[3px] border-natural-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#929DAE"
                  d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div
        dir="rtl"
        className="w-fit self-end text-nowrap px-3 py-2 flex gap-3 rounded-xl bg-secondary-2"
      >
        <p className="text-xl text-white">سرعت پخش : </p>
        <input
          type="text"
          className="max-w-[50px] bg-secondary-2 text-xl text-center text-white"
        />
        <p className="text-xl text-white">ثانیه</p>
      </div>
    </div>
  );
}
