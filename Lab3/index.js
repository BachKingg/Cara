const express = require('express')
const res = require('express/lib/response')
const path = require('path')
const app = express();
const formidable = require('formidable');
const fs = require('fs');
const port = 3000;
// Nhúng views
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

//Connect DB
var mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bookshop"
})



function kindOfDay() {
    var today = new Date();
    currentDay = today.getDay();
    var day = '';
    switch (currentDay) {
        case 0: day = 'Sunday'; break;
        case 1: day = 'Monday'; break;
        case 2: day = 'Tuesday'; break;
        case 3: day = 'Wednesday'; break;
        case 4: day = 'Thursday'; break;
        case 5: day = 'Friday'; break;
        case 6: day = 'Saturday'; break;
        default: console.log(`Error: ${currentDay}`);
    }
    return day;
}

//routes
app.get("/", (req, res) => {
    let sql = "select id , tenLoai from loai";
    db.query(sql, function (err, listLoai) {
        if (err) throw err;
        res.render('home', { loaiSach: listLoai, kindOfDay: kindOfDay() });
    })
});

app.get("/shop", (req, res) => {
    let sql = "select id , tenLoai from loai";
    let sqlSach = "select id, tenSach, mota, urlHinh, gia from sach";
    db.query(sql, function (err, listLoai) {
        if (err) throw err;
        db.query(sqlSach, function (err, listSach) {
            if (err) throw err;
            res.render('shop', { loaiSach: listLoai, listSach: listSach, kindOfDay: kindOfDay() });
        })
    })
});

app.get("/cat/:cateId", (req, res) => {
    let id = req.params.cateId;
    let sql = `select * from loai`;
    let sqlSach = `select * from sach WHERE idLoai=${id}`;
    db.query(sql, function (err, listLoai) {
        db.query(sqlSach, function (err, listSach) {
            if (err) throw err;
            res.render('shop', { loaiSach: listLoai, listSach: listSach, kindOfDay: kindOfDay() });
        });
    });
})

app.get("/detail/:spId", (req, res) => {
    let idSach = req.params.spId;
    idSach = parseInt(idSach, 10);
    let sql = `select * from loai`;
    let sqlSach = `select * from sach WHERE id=${idSach}`;
    db.query(sql, function (err, listLoai) {
        db.query(sqlSach, function (err, listSach) {
            if (err) throw err;
            res.render('chitietsp', { loaiSach: listLoai, listSach: listSach, kindOfDay: kindOfDay() });
        });
    });
})

app.get("/addnew", (req, res) => {
    res.render("add-product")
})

app.post("/addnew", (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        let pathFile = files.hinhsp.filepath;
        let tenFile = files.hinhsp.originalFilename;
        let tensp = fields.tensp;
        let giasp = fields.giasp;
        let motasp = fields.motasp;
        let destPath = __dirname + '\\public\\images\\' + tenFile;
        fs.copyFile(pathFile, destPath, (err) => {
            if (err) throw err;
            fs.unlink(pathFile, () => { console.log('Đã xóa file tạm'); });
            console.log('Đã upload xong file ' + tenFile);
        });
        listProduct.push({
            id: listProduct[listProduct.length - 1].id + 1,
            title: tensp,
            price: giasp,
            description: motasp,
            imageURL: tenFile,
        });
        //res.send(JSON.stringify({ fields, files,pathFile , destPath}, null, 2));
        res.redirect('/shop');
    });
});



app.listen(port, () => { console.log(`Project dang chay o port ${port}`) })