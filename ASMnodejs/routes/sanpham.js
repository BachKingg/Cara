var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelSanpham = require('./../models/sanpham');

router.get('/', (req, res) => {
    modelSanpham.list(function (listSanpham) { res.json(listSanpham) });
});

router.get('/hot', (req, res) => {
    modelSanpham.listhot(function (listSanpham) { res.json(listSanpham) });
});

router.get('/new', (req, res) => {
    modelSanpham.listnew(function (listSanpham) { res.json(listSanpham) });
});

// router.get('/relate', (req, res) => {
//     modelSanpham.listrelate(function (listSanpham) { res.json(listSanpham) });
// });

// router.get('/relate/:id', (req, res) => {
//     let id = req.params.id;
//     modelSanpham.listrelate(id, function (u) {
//         res.json(u); 
//         modelSanpham.listrelate(function (listSanpham) { res.json(listSanpham) });
//     });
// });

router.get('/relate/:id', (req, res) => {
    let id = req.params.id;
    modelSanpham.listrelate(id, function (listSanpham) { res.json(listSanpham) });
});

router.post('/', (req, res) => {
    let data = req.body;
    modelSanpham.create(data, function (d) {
        res.json({ ...d, ...data, thongbao: "Đã thêm xong một sản phẩm mới" });
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    modelSanpham.read(id, function (u) {
        res.json(u);
    });
});

router.put('/:id', (req, res) => {
    let data = req.body;
    let id = req.params.id;
    modelSanpham.update(id, data, function () {
        res.json({ thongbao: 'Đã cập nhật sản phẩm' });
    })
});


router.delete('/:id', (req, res) => {
    // let data = req.body;
    let id = req.params.id;
    modelSanpham.clear(id, function () {
        res.json({ thongbao: 'Đã xóa!' });
    })
});



module.exports = router;