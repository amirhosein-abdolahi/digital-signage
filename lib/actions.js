"use server";

import { addNew, deleteNew } from "./news";
import { addSubtitle } from "./subtitles";
import { addVideo, deleteVideo } from "./videos";

export async function addANew(formData) {
  const _new = {
    title: formData.get("title"),
    image: formData.get("image"),
  };

  await addNew(_new);
}

export async function deleteANew(slug, image) {
  await deleteNew(slug, image);
}

export async function addAVideo(formData) {
  const video = {
    title: formData.get("title"),
    video: formData.get("video"),
  };

  await addVideo(video);
}

export async function deleteAVideo(slug, video) {
  await deleteVideo(slug, video);
}

export async function addASubtitle(formData) {
  const subtitle = {
    text: formData.get("text"),
  };
  await addSubtitle(subtitle);
}
