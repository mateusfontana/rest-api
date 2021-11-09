const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config.js');

console.log(config);

const db = new Sequelize(
  "postgres",
  "postgres",
  "postgres",
  {
    host: "localhost",
    port: 5432,
    dialect: 'postgres'
  }
);

fs.readdirSync(__dirname + '/rest')
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    var model = db.import(path.join(__dirname + '/rest', file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
