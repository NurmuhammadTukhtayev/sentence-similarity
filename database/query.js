const db = require("./connection").promise()

let query = async(sql, data) => {
    try {
        let d = await db.query(sql, data);
        return d[0];
    } catch (err) {
        console.log("Error DataBase: ./app/database/db/fun.js:9 rows ... \n" + err);
        return { err: 1, errData: err };
    }
}

module.exports = {
    query: query
}