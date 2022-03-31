var express = require('express');
var router = express.Router();
var db = require('./../models/database');
var modelUsers = require('./../models/users');

router.get('/', (req, res) => {
    modelUsers.list(function (listUsers) { res.json(listUsers) });
});

router.post('/', (req, res) => {
    let data = req.body;
    modelUsers.create(data, function () {
        res.json({ thongbao: "Đã thêm xong một User mới!" });
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    modelUsers.read(id, function (u) {
        res.json(u);
    });
});

router.put('/:id', (req, res) => {
    let data = req.body;
    let id = req.params.id;
    modelUsers.update(id, data, function () {
        res.json({ thongbao: 'Đã cập nhật User!' });
    })
});


// router.delete('/:id', (req, res) => {
//     let data = req.body;
//     let id = req.params.id;
//     modelUsers.update(id, data, function () {
//         res.json({ thongbao: 'Đã xóa User!' });
//     })
// });



module.exports = router;