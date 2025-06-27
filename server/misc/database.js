const mysql = require("mysql2/promise");

let conn;

// Kiekvienas sąrašo punktas turi turėti šiuos elementus:
// 1. istorijos/idėjos tekstą;
// 2. nuotrauką;
// 3. norimą surinkti sumą;
// 4. jau surinktą sumą;
// 5. likusią iki tikslo sumą;
// 6. sąrašą su lėšų surinkimo istorija (lėšų aukotojo vardas ir suma);
// 7. kiekvienas punktas turi turėti du input laukelius- vienas lėšų aukotojo vardui, kitas
// aukojamai sumai ir mygtuką aukoti.

const initializeDb = async () => {
  conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
  });

  console.log("db connected");

  try {
    const [results, fields] = await conn.query(`
        create table IF NOT EXISTS projects (
            project_id int auto_increment PRIMARY KEY,
            project_info varchar(255) not null,
            target_amount decimal(15,2) not null,
            collected_amount decimal(15,2) DEFAULT 0,
            picture_url varchar(255),
            created_at timestamp default current_timestamp
        );
    `);

    // console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
    console.log('projects table created if not exists')
  } catch (err) {
    console.error('projects creation error', err);
  }
};

// Create the connection to database

// // A simple SELECT query
// try {
//   const [results, fields] = await connection.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
//   );

//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//   console.log(err);
// }

// // Using placeholders
// try {
//   const [results] = await connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45]
//   );

//   console.log(results);
// } catch (err) {
//   console.log(err);
// }

module.exports = { conn, initializeDb };
