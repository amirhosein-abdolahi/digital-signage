"use server";

import { addNew, deleteNew } from "./news";

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
