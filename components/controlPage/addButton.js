"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function AddButton({ modal }) {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleButton = () => {
    const params = new URLSearchParams(searchParam);
    params.set("modal", modal);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full flex justify-center">
      <button onClick={handleButton}>
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
      </button>
    </div>
  );
}
