"use client";

import { deleteANew } from "@/lib/actions";

export default function ControlButtons({ slug, image }) {
  const handleDelete = async () => {
    try {
      await deleteANew(slug, image);
    } catch (error) {
      console.log("Failed to delete:", error);
    }
  };

  return (
    <div className="h-0 group-hover:h-[30px] group-hover:mb-2 transition-all">
      <div className="flex flex-row-reverse justify-center gap-5">
        <button
          className="px-1 flex items-center rounded-md bg-red-600"
          onClick={handleDelete}
        >
          <h1 className="text-white">حذف</h1>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu / Close_MD">
              <path
                id="Vector"
                d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                stroke="#ffffff"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
        <button className="px-1 flex items-center gap-1 rounded-md bg-secondary-2">
          <h1 className="text-white">تغییر</h1>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <g id="Complete">
              <g id="edit">
                <g>
                  <path
                    d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                    fill="none"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />

                  <polygon
                    fill="none"
                    points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
