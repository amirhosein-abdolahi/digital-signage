"use client";

import { addANew, addASubtitle, addAVideo, editANew } from "@/lib/actions";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Modal() {
  const searchParams = useSearchParams();
  const modalType = searchParams.get("modal");
  const modalAction = searchParams.get("action");
  const modalSlug = searchParams.has("slug") && searchParams.get("slug");
  const modalFile = searchParams.has("file") && searchParams.get("file");
  const dialogRef = useRef(null);
  const [slug, setSlug] = useState(null);
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [filePiked, setFilePiked] = useState(null);
  const fileInput = useRef();
  const { push } = useRouter();
  let onSave;

  if (modalAction === "add") {
    switch (modalType) {
      case "new":
        onSave = addANew;
        break;
      case "video":
        onSave = addAVideo;
        break;
      case "subtitle":
        onSave = addASubtitle;
        break;
      default:
        console.error("Modal type not found");
    }
  } else if (modalAction === "edit") {
    switch (modalType) {
      case "new":
        onSave = (formData) => {
          editANew(modalSlug, modalFile, formData);
          console.log(formData);
        };
        // TODO
        break;
      case "video":
        // TODO
        break;
      case "subtitle":
        // TODO
        break;
      default:
        console.error("Modal type not found");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/${modalType}/${modalSlug}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      if (modalType === "new") {
        setSlug(result.slug);
        setTitle(result.title);
        setFilePiked(result.image);
      } else if (modalType === "video") {
        // TODO
      } else if (modalType === "subtitle") {
        // TODO
      }
    };

    if (modalAction === "edit") {
      fetchData();
    }
  }, [modalAction, modalType, modalSlug]);

  useEffect(() => {
    if (modalType) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [modalType]);

  const handleModal = () => {
    dialogRef.current?.close();
    setTitle(null);
    setText(null);
    setSlug(null);
    setFilePiked(null);
    const params = new URLSearchParams(searchParams);
    params.delete("modal");
    params.delete("action");
    if (params.has("slug")) {
      params.delete("slug");
    }
    if (params.has("file")) {
      params.delete("file");
    }
    push(`/edit?${params.toString()}`);
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
      if (modalType === "new") {
        setFilePiked(fileReader.result);
      } else {
        const videoURL = URL.createObjectURL(file);
        setFilePiked(videoURL);
      }
    };

    fileReader.readAsDataURL(file);
  };

  const modalContent =
    modalType !== "subtitle" ? (
      <div className="grid gap-5">
        <div className="flex flex-row-reverse items-center gap-5">
          <label htmlFor="title" className="text-xl">
            عنوان
          </label>
          <input
            dir="rtl"
            type="text"
            id="title"
            name="title"
            placeholder="عنوان مورد نظر را وارد کنید"
            className="w-full px-2 py-1 border-[3px] border-secondary-2 rounded-lg"
            defaultValue={title}
            required
          />
        </div>
        <div className="flex flex-row-reverse justify-between">
          <div className="flex flex-row-reverse gap-5">
            <button
              type="button"
              onClick={handlePikedFile}
              className="px-2 py-0.5 h-fit bg-secondary-2 text-white rounded-lg"
            >
              افزودن فایل
            </button>
          </div>
          <div className="relative rounded-lg overflow-hidden left-0 w-[200px] h-[150px]">
            {!filePiked ? (
              <p>فایل یافت نشد</p>
            ) : modalType === "new" ? (
              <Image
                src={filePiked}
                alt="The image selected by user"
                fill
                objectFit="cover"
              />
            ) : (
              <video className="absolute top-0 left-0 w-full h-full object-cover -z-1">
                <source src={filePiked} type="video/mp4" />
              </video>
            )}
          </div>
          {modalType === "new" ? (
            <input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              className="hidden"
              ref={fileInput}
              onChange={handleFileChange}
            />
          ) : (
            <input
              type="file"
              id="video"
              name="video"
              accept="video/mp4"
              className="hidden"
              ref={fileInput}
              onChange={handleFileChange}
            />
          )}
        </div>
      </div>
    ) : (
      <div dir="rtl" className="grid gap-5">
        <label htmlFor="text" className="text-xl">
          متن زیرنویس
        </label>
        <textarea
          id="text"
          name="text"
          placeholder="متن مورد نظر را وارد کنید ..."
          style={{ height: "200px" }}
          className="p-2 border-[3px] border-secondary-2 rounded-xl"
          required
        />
      </div>
    );

  const modal = modalType ? (
    <dialog
      ref={dialogRef}
      className="fixed p-5 top-50 right-50 -translate-x-50 -translate-y-50 z-10 rounded-2xl backdrop:bg-natural-700/70"
    >
      <form action={onSave} className="w-[500px] grid gap-5">
        {modalContent}
        <div className="flex justify-end gap-5 *:text-xl">
          <button
            type="button"
            onClick={handleModal}
            className="px-3 py-1 border-[3px] rounded-lg border-red-500 hover:bg-red-500 hover:text-white"
          >
            انصراف
          </button>
          <button
            type="submit"
            onClick={handleModal}
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
