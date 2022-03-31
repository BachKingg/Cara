var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelOrders_Details = require('./../models/orders_details');

router.get('/', (req, res) => {
    modelOrders_Details.list(function (listOrders_Details) { res.json(listOrders_Details) });
});

router.post('/', (req, res) => {
    let data = req.body;
    modelOrders_Details.create(data, function (d) {
        res.json({...d,...data, thongbao: "Đã thêm xong một chi tiết đơn hàng mới" });
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    modelOrders_Details.read(id, function (u) {
        res.json(u);
    });
});

router.put('/:id', (req, res) => {
    let data = req.body;
    let id = req.params.id;
    modelOrders_Details.update(id, data, function () {
        res.json({ thongbao: 'Đã cập nhật chi tiết đơn hàng' });
    })
});

router.delete('/:id', (req, res) => {
    // let data = req.body;
    let id = req.params.id;
    modelOrders_Details.clear(id, function () {
        res.json({ thongbao: 'Đã xóa!' });
    })
});

module.exports = router;