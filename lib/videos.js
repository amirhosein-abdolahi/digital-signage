import sql from "better-sqlite3";
import slugify from "slugify";
import fs from "node:fs";

const db = sql("data.db");

export async function getVideos() {
  return db.prepare("SELECT * FROM videos").all();
}

export async function getVideo(slug) {
  return db.prepare("SELECT * FROM videos WHERE slug = ?", slug).get(slug);
}

export async function addVideo(video) {
  video.slug = slugify(video.title, { lowercase: true });

  const extension = video.video.name.split(".").pop();
  const filename = `${video.slug}.${extension}`;

  const stream = fs.createWriteStream(`./public/videos/${filename}`);
  try {
    const bufferedVideo = await video.video.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(bufferedVideo));
    stream.write(buffer, (error) => {
      if (error) {
        console.error("Write error:", error);
        throw new Error("Saving video failed");
      }
      stream.end(); // Ensure the stream is closed properly
    });
  } catch (error) {
    console.error("Error during video processing:", error);
    throw new Error("Saving video failed");
  }

  video.video = `/videos/${filename}`;

  db.prepare(
    `
      INSERT INTO videos (slug, title, video)
      VALUES (
        @slug,
        @title,
        @video
      )
    `
  ).run(video);
}

export async function deleteVideo(slug, video) {
  fs.unlink(`./public/${video}`, (error) => {
    if (error) {
      console.error("Deleting video failed");
      return;
    }
  });

  db.prepare("DELETE FROM videos WHERE slug = ?").run(slug);
  console.log("Deleted video:", video);
}
