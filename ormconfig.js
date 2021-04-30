const fs = require("fs")
const isDev = process.env.NODE_ENV === 'development';

let dbConfig;
if (isDev) {
    dbConfig = JSON.parse(fs.readFileSync(__dirname + "configs/db/development.json", "utf-8"))
} else {
    dbConfig = {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB
    }
}

module.exports = {
    ...dbConfig,
    synchronize: true,
    entities: ['dist/type-orm-entities/*.entity{.ts,.js}'],
};
