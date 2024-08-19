const sql = require("better-sqlite3");
const db = sql("data.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL 
    )
  `
).run();

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      video TEXT NOT NULL
    )
  `
).run();

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS subtitles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL
    )
  `
).run();

// const createTable = () => {
//   const query = `CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     age INTEGER
//     )`;
//   db.prepare(query).run();
// };

// const insertTable = (name, age) => {
//   const query = `
//     INSERT INTO users (name, age)
//     VALUES (?, ?)
//   `;
//   db.prepare(query).run(name, age);
// };

// const getUsers = () => {
//   const query = `
//     SELECT * FROM users
//   `;
//   const rows = db.prepare(query).all();
//   console.log(rows);
// };

// const getUser = (age, name) => {
//   const query = `
//     SELECT * FROM users
//     WHERE age = ? AND name = ?
//   `;
//   return db.prepare(query).all(age, name);
// };

// const user = getUser(23, "alice");
// console.log(user);

// insertTable("amir");
