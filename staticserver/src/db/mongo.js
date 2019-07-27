var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'weilu',
    multipleStatements: true
});


module.exports = sql => {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, data) => {
            if (error) {
                reject(error)
            }
            resolve(data)
        });
    })



}