module.exports = {
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "mysqlDs": {
    "host": process.env.MYSQL_HOST || "demo.strongloop.com",
    "port": process.env.MYSQL_PORT || 3306,
    "database": process.env.MYSQL_DBNAME || "getting_started_intermediate",
    "username": process.env.MYSQL_USER || "demo",
    "password": process.env.MYSQL_PWD || "L00pBack",
    "name": "mysqlDs",
    "connector": "mysql"
  },
  "mongoDs": {
    "host": process.env.MONGO_HOST || "demo.strongloop.com",
    "port": process.env.MONGO_PORT || 27017,
    "database": process.env.MONGO_DBNAME || "getting_started_intermediate",
    "username": process.env.MONGO_USER || "demo",
    "password": process.env.MONGO_PASSWORD || "L00pBack",
    "name": "mongoDs",
    "connector": "mongodb"
  }
};
console.log("Datasources : ", module.exports);