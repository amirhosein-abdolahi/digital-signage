import sql from "better-sqlite3";

const db = sql("data.db");

export async function getSubtitles() {
  return db.prepare("SELECT * FROM subtitles").all();
}

export async function getSubtitle(id) {
  return db.prepare("SELECT * FROM subtitles WHERE id = ?").get(id);
}

export async function addSubtitle(subtitle) {
  db.prepare(
    `
      INSERT INTO subtitles (text)
      VALUES (
        @text
      )
    `
  ).run(subtitle);
}

export async function deleteSubtitle(id) {
  db.prepare("DELETE FROM subtitles WHERE id = ?").run(id);
  console.log("deleted subtitle:", id);
}
