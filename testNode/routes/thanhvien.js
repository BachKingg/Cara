var express = require('express');
var router = express.Router();
var db = require('../models/database');

router.get('/dangky', function (req, res) {
    res.render("dangky.ejs");
});

router.post('/luu', function (req, res) {
    let u = req.body.username;
    let p = req.body.password;
    let fn = req.body.fullname;

    const bcrypt = require("bcrypt");
    var salt = bcrypt.genSaltSync(10);
    var pass_mahoa = bcrypt.hashSync(p, salt);

    let user_info = { username: u, password: pass_mahoa, fullname: fn };
    let sql = 'INSERT INTO taikhoan SET ?';
    db.query(sql, user_info);
    res.redirect("/thanhvien/camon");
});

router.get('/camon', function (req, res, next) {
    res.render('camon.ejs');
});

router.get('/thanhcong', function (req, res, next) {
    res.render('thanhcong.ejs');
});


router.get('/dangnhap', function (req, res) {
    res.render("dangnhap.ejs");
});

router.post('/dangnhap_', async function (req, res) {
    let u = req.body.username;
    let p = req.body.password;
    let sql = 'SELECT * FROM taikhoan WHERE username = ?';
    db.query(sql, [u], (err, rows) => {
        if (rows.length <= 0) { res.redirect("/thanhvien/dangnhap"); return; }
        let user = rows[0];
        let pass_fromdb = user.password;
        const bcrypt = require("bcrypt");
        var kq = bcrypt.compareSync(p, pass_fromdb);
        if (kq) {
            console.log("OK");
            var sess = req.session;  //initialize session variable
            sess.daDangNhap = true;
            sess.username = user.username;
            //res.redirect("/thanhvien/thanhcong");
            if (sess.back) {
                console.log(sess.back);
                res.redirect(sess.back);
            }
            else {
                res.redirect("/thanhvien/thanhcong");
            }
        }
        else {
            console.log("Not OK");
            res.redirect("/thanhvien/dangnhap");
        }
    });
});

router.get('/download', function (req, res) {
    if (req.session.daDangNhap) {
        res.render("download.ejs", { un: req.session.username });
    }
    else {
        req.session.back = "/thanhvien/download";
        res.redirect("/thanhvien/dangnhap");
    }
});

router.get('/thoat', function (req, res) {
    req.session.destroy();
    res.redirect("/thanhvien/dangnhap");
});
module.exports = router;