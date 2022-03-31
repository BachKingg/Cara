var db = require('./database');

exports.list = function (callback) {
    let sql = `SELECT *  FROM orders`;
    db.query(sql, function (err, d) { callback(d); });
}

exports.create = function (data, callback) {
    let sql = 'INSERT INTO orders SET ?';
    db.query(sql, data, function (err, d) {
        callback(d)
    });
}


exports.update = function (id, data, callback) {
    let sql = 'UPDATE orders  SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });
}

exports.read = function (id, callback) {
    let sql = 'SELECT * FROM orders WHERE id = ?'
    db.query(sql, id, (err, d) => {
        data = d[0];
        callback(data);
    });
}

exports.clear = function (id, callback) {
    let sql = 'DELETE FROM orders WHERE id = ?';
    db.query(sql, id, (err, d) => {
        if (err) throw err;
        callback();
    });
}