var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelDanhmuc = require('./../models/danhmuc');

router.get('/', (req, res) => {
    modelDanhmuc.list(function (listDanhmuc) { res.json(listDanhmuc) });
});

router.post('/', (req, res) => {
    let data = req.body;
    modelDanhmuc.create(data, function (d) {
        res.json({...d,...data, thongbao: "Đã thêm xong một danh mục mới" });
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    modelDanhmuc.read(id, function (u) {
        res.json(u);
    });
});

router.put('/:id', (req, res) => {
    let data = req.body;
    let id = req.params.id;
    modelDanhmuc.update(id, data, function () {
        res.json({ thongbao: 'Đã cập nhật danh mục' });
    })
});

router.delete('/:id', (req, res) => {
    // let data = req.body;
    let id = req.params.id;
    modelDanhmuc.clear(id, function () {
        res.json({ thongbao: 'Đã xóa!' });
    })
});

module.exports = router;