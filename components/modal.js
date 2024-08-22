"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Modal({ onClose, onOk }) {
  const searchParams = useSearchParams();
  const modalParam = searchParams.get("modal");
  const dialogRef = useRef(null);
  const [filePiked, setFilePiked] = useState(null);
  const fileInput = useRef();

  useEffect(() => {
    if (modalParam) {
      dialogRef.current?.showModal();
      console.log(dialogRef.current);
    } else {
      dialogRef.current?.close();
    }
  }, [modalParam]);

  const closeModal = () => {
    dialogRef.current?.close();
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeModal();
  };

  function handlePikedFile() {
    fileInput.current.click();
  }

  const handleFileChange = () => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFilePiked(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  const modal = modalParam ? (
    <dialog
      ref={dialogRef}
      className="fixed p-5 top-50 right-50 -translate-x-50 -translate-y-50 z-10 rounded-2xl backdrop:bg-natural-700/70"
    >
      <form className="w-[500px] grid gap-5">
        <div className="flex flex-row-reverse items-center gap-5">
          <h1 className="text-xl">عنوان</h1>
          <input
            dir="rtl"
            type="text"
            placeholder="عنوان مورد نظر را وارد کنید"
            className="w-full px-2 py-1 border-[3px] border-secondary-2 rounded-lg"
          />
        </div>
        <div className="flex flex-row-reverse justify-between">
          <button
            type="button"
            onClick={handlePikedFile}
            className="px-2 py-0.5 h-fit bg-secondary-2 text-white rounded-lg"
          >
            افزودن فایل
          </button>
          <div className="relative rounded-lg overflow-hidden left-0 w-[200px] h-[150px]">
            {filePiked ? (
              <Image
                src={filePiked}
                alt="The image selected by user"
                fill
                objectFit="cover"
              />
            ) : (
              <p>تصویری یافت نشد</p>
            )}
          </div>
          <input
            type="file"
            className="hidden"
            ref={fileInput}
            onChange={handleFileChange}
          />
        </div>
        <div className="flex justify-end gap-5 *:text-xl">
          <button
            type="button"
            onClick={closeModal}
            className="px-3 py-1 border-[3px] rounded-lg border-red-500 hover:bg-red-500 hover:text-white"
          >
            انصراف
          </button>
          <button
            type="submit"
            onClick={clickOk}
            className="px-3 py-1 bg-secondary-2 text-white rounded-lg"
          >
            ذخیره
          </button>
        </div>
      </form>
    </dialog>
  ) : null;

  return modal;
}
