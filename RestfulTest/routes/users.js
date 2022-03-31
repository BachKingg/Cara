var express = require('express');
var router = express.Router();
var db = require('./../models/db');
// List
router.get('/', function (req, res, next) {
    let sql = `SELECT id, fullName, userName, password FROM users`;
    db.query(sql, function (err, data) {
        res.json(data[0]);
    });
});
// Insert
router.post('/', function (req, res, next) {
    let data = req.body;  
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, d) => {
        if (err) throw err;
        res.json({thongbao:"Đã chèn xong người dùng mới"});
    });
});
// Details
router.get('/:id', function (req, res, next) {
    let id=req.params.id;      
    let sql = 'SELECT * FROM users WHERE id = ?'    
    db.query(sql, id, (err, d) => {
       res.json(d[0]);
    });   
});
// Update
router.put('/:id', function (req, res, next) {
    let data = req.body;
    let id = req.params.id;
    let sql = 'UPDATE users SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        res.json({thongbao: 'Đã cập nhật thông tin người dùng'});
    });
});
// Delete
router.delete('/:id', function (req, res) {
    let id = req.params.id;
    let sql = 'DELETE FROM users WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        res.json({thongbao: 'Đã xóa thành công'});
    });
});
module.exports = router;