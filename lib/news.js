import sql from "better-sqlite3";
import slugify from "slugify";
import fs from "node:fs";

const db = sql("data.db");

export async function getNews() {
  return db.prepare("SELECT * FROM news").all();
}

export async function getNew(slug) {
  return db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);
}

export async function addNew(_new) {
  _new.slug = slugify(_new.title, { lowercase: true });

  const extension = _new.image.name.split(".").pop();
  const fileName = `${_new.slug}.${extension}`;

  const stream = fs.createWriteStream(`./public/images/${fileName}`);
  const bufferedImage = await _new.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  _new.image = `/images/${fileName}`;

  db.prepare(
    `
      INSERT INTO news (slug, title, image)
      VALUES (
        @slug,
        @title,
        @image
      )
    `
  ).run(_new);
}

export async function deleteNew(slug, image) {
  fs.unlink(`./public/${image}`, (error) => {
    if (error) {
      console.error("Deleting image failed");
      return;
    }
  });

  db.prepare("DELETE FROM news WHERE slug = ?").run(slug);
  console.log("deleted:", slug);
}
