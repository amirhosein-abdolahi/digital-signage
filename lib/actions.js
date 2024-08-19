"use server";

import { redirect } from "next/dist/server/api-utils";
import { addNew } from "./news";

export async function addANew(formData) {
  const _new = {
    title: formData.get("title"),
    image: formData.get("image"),
  };

  await addNew(_new);
  redirect("/");
}
