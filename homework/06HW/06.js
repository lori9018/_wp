import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("test.db");
db.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,title TEXT)");

const posts = [ {name:'arther',title:'student'},{name:'nana',title:'monther'},{name:'jatirck',title:'teacher'}];

db.query("DELETE FROM posts");
// Run a simple query
for (const post of posts)
  db.query("INSERT INTO posts (name, title) VALUES (?,?)", [post.name,post.title]);

// Print out data in table
for (const [id, name, title] of db.query("SELECT id, name, title FROM posts"))
  console.log(id, name, title);

// Close connection
db.close();