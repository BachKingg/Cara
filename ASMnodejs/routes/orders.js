var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelOrders = require('./../models/orders');

router.get('/', (req, res) => {
    modelOrders.list(function (listOrders) { res.json(listOrders) });
});

router.post('/', (req, res) => {
    let data = req.body;
    modelOrders.create(data, function (d) {
        res.json({...d,...data, thongbao: "Đã thêm xong một đơn hàng mới" });
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    modelOrders.read(id, function (u) {
        res.json(u);
    });
});

router.put('/:id', (req, res) => {
    let data = req.body;
    let id = req.params.id;
    modelOrders.update(id, data, function () {
        res.json({ thongbao: 'Đã cập nhật đơn hàng' });
    })
});

router.delete('/:id', (req, res) => {
    // let data = req.body;
    let id = req.params.id;
    modelOrders.clear(id, function () {
        res.json({ thongbao: 'Đã xóa!' });
    })
});

module.exports = router;