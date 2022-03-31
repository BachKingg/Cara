var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var db = require('./../models/database');
var modelUsers = require('./../models/users');
var modelSanpham = require('./../models/sanpham');
var modelDanhmuc = require('./../models/danhmuc');
const { render } = require('../app');



/* GET HOME PAGE. */
router.get('/', function (req, res, next) {
    if (req.session.daDangNhap) {
        res.render("index", { un: req.session.username });
    }
    else {
        req.session.back = "/";
        res.redirect("/authen");
    }
});

// ADMIN
// router.get('/admin', function (req, res, next) {
//     res.render('admin/admin');
// });

router.get('/cate', function (req, res, next) {
    res.render('admin/categories');
});

router.get('/pro', function (req, res, next) {
    res.render('admin/products');
});

router.get('/ct', function (req, res, next) {
    res.render('admin/customers');
});

router.get('/checkout', function (req, res, next) {
    res.render('checkout');
});


// SẢN PHẨM
router.get('/shop', (req, res) => {
    res.render("shop");
});

router.get('/loai', (req, res) => {
    res.render("loai");
});


router.get('/product', (req, res) => {
    res.render("product");
});

router.get('/product/:id', (req, res) => {
    let id = req.params.id;
    res.render("product", { id: id });
});

// ĐĂNG KÝ & ĐĂNG NHẬP
router.get('/authen', function (req, res) {
    res.render("authen.ejs");
});

router.post('/luu', function (req, res) {
    let u = req.body.usernamesu;
    let p = req.body.passwordsu;
    let em = req.body.emailsu;
    let sex = req.body.gender;
    let ngaysinh = req.body.birthday;

    var salt = bcrypt.genSaltSync(10);
    var pass_mahoa = bcrypt.hashSync(p, salt);

    let user_info = { username: u, password: pass_mahoa, email: em, gioitinh: sex, ngaysinh: ngaysinh };
    let sql = 'INSERT INTO taikhoan SET ?';
    db.query(sql, user_info);
    res.redirect("/authen");
});


router.post('/dangnhap_', async function (req, res) {
    let u = req.body.usernamesi;
    let p = req.body.passwordsi;
    console.log(p);
    let sql = 'SELECT * FROM taikhoan WHERE username = ?';
    db.query(sql, [u], (err, rows) => {
        if (rows.length <= 0) {
            res.redirect("/authen");
            return;
        }
        let user = rows[0];
        let pass_fromdb = user.password;
        var kq = bcrypt.compareSync(p, pass_fromdb);
        console.log(kq);
        if (kq) {
            console.log("OK");
            var sess = req.session;  //initialize session variable
            sess.daDangNhap = true;
            sess.username = user.username;
            // res.redirect("/thanhcong");
            if (sess.back) {
                console.log(sess.back);
                res.redirect(sess.back);
            }
            else {
                res.redirect("/");
            }
        }
        else {
            console.log("Not OK");
            res.redirect("/authen2");
        }
    });
});

// ADMIN login
router.get('/admin', function (req, res) {
    if (req.session.daDangNhap) {
        res.render("admin/admin", { un: req.session.username });
    }
    else {
        req.session.back = "/admin";
        res.redirect("/authen");
    }
});

router.get('/thoat', function (req, res) {
    req.session.destroy();
    res.redirect("/authen");
});


module.exports = router;
