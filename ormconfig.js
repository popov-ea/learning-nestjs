const fs = require("fs")
const isDev = process.env.NODE_ENV === 'development';

let dbConfig;
if (isDev) {
    dbConfig = JSON.parse(fs.readFileSync(__dirname + "/configs/db/development.json", "utf-8"))
} else {
    dbConfig = {
        type: process.env.DB_TYPE,
        url: process.env.DB_URL
    }
}

console.log("DB", dbConfig);

module.exports = {
    ...dbConfig,
    synchronize: true,
    entities: ['dist/type-orm-entities/*.entity{.ts,.js}'],
};
