var db = require('./database');

exports.list = function (callback) {
    let sql = `SELECT *  FROM sanpham WHERE 1 ORDER BY id DESC`;
    db.query(sql, function (err, d) { callback(d); });
}

exports.create = function (data, callback) {
    let sql = 'INSERT INTO sanpham SET ?';
    db.query(sql, data, function (err, d) { callback(d) });
}

exports.update = function (id, data, callback) {
    let sql = 'UPDATE sanpham  SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });
}

exports.read = function (id, callback) {
    let sql = 'SELECT * FROM sanpham WHERE id = ?'
    db.query(sql, id, (err, d) => {
        data = d[0];
        callback(data);
    });
}

exports.clear = function (id, callback) {
    let sql = 'DELETE FROM sanpham WHERE id = ?';
    db.query(sql, id, (err, d) => {
        if (err) throw err;
        callback();
    });
}

exports.listhot = function (callback) {
    let sql = `SELECT *  FROM sanpham WHERE hot = 1 `;
    db.query(sql, function (err, d) { callback(d); });
}

exports.listnew = function (callback) {
    let sql = `SELECT * FROM sanpham WHERE 1 ORDER BY createDate DESC LIMIT 10;
    `;
    db.query(sql, function (err, d) { callback(d); });
}

// exports.listrelate = function (callback) {
//     let sql = `SELECT * FROM sanpham INNER JOIN danhmuc on sanpham.id_danhmuc=danhmuc.id WHERE id_danhmuc = ?`;
//     db.query(sql, function (err, d) { callback(d); });
// }

exports.listrelate = function (id, callback) {
    let sql = 'SELECT * FROM sanpham INNER JOIN danhmuc on sanpham.id_danhmuc=danhmuc.id WHERE id_danhmuc = ?'
    db.query(sql, id, (err, d) => {
        data = d;
        callback(data);
    });
}