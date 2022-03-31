var express = require('express');
var router = express.Router();
var modelUsers = require('./../models/users');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/danhsachuser', (req, res) => {
    res.render("listusers");
});

router.get('/chitietuser', (req, res) => {
    res.render("chitietuser");
});

router.get('/chitietuser/:id', (req, res) => {
    let id = req.params.id;
    res.render("chitietuser", { id: id });
});

router.get('/dangky', (req, res) => {
    res.render("dangky");
});

router.get('/capnhat/:id', (req, res) => {
    let id = req.params.id;
    modelUsers.read(id, function (u) {
        res.render("capnhat", { u: u });
    });
});
module.exports = router;
