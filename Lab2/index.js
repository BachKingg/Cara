const express = require('express')
const path = require('path')
var app = express();
const formidable = require('formidable');
const fs = require('fs');
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('home', { kindOfDay: kindOfDay() });
});

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
var listProduct = [
    {
        id: 0101,
        title: 'Sống Xanh Như Những Lá Trà',
        slug: 'song-xanh-nhu-nhung-la-tra',
        price: 63500,
        description: "Khám phá kho tàng ý tưởng về sự đơn giản, trí tuệ của người Nhật",
        imageURL: "song-xanh-nhu-nhung-la-tra.png",
    },
    {
        id: 0102,
        title: 'Sống Như Lần Đầu, Yêu Như Lần Cuối',
        slug: 'song-nhu-lan-dau-tien-yeu-thuong-nhu-lan-cuoi',
        price: 52000,
        description: "Những câu chuyện hằng ngày, những hạnh phúc giản dị mà chúng ta dễ bỏ lỡ",
        imageURL: "song-nhu-lan-dau-tien-yeu-thuong-nhu-lan-cuoi.jpg",
    },
    {
        id: 0103,
        title: 'Sức Mạnh Của Sự Tử Tế',
        slug: 'suc-manh-cua-su-tu-te',
        price: 29000,
        description: "Những câu chuyện sâu sắc và ý nghĩa về sự tử tế mỗi ngày",
        imageURL: "suc-manh-cua-su-tu-te.png",
    },
    {
        id: 0104,
        title: 'Sống Chậm Đợi Nắng Lên',
        slug: 'song-cham-doi-nang-len',
        price: 71200,
        description: "Lúc con trai còn nhỏ, tôi thường có những trò chơi đố vui dành cho con.",
        imageURL: "song-cham-doi-nang-len.png",
    },
    {
        id: 0105,
        title: 'Những Ngày Đầy Nắng',
        slug: 'nhung-ngay-day-nang',
        price: 103200,
        description: "“Bạn thân mến! Tôi chưa bao giờ nghĩ mình sẽ viết sách. Tôi cũng chưa bao giờ tin, mình có thể làm bánh...",
        imageURL: "nhung-ngay-day-nang.png",
    },
    {
        id: 0106,
        title: 'Để Có Một Tương Lai',
        slug: 'de-co-mot-tuong-lai',
        price: 124000,
        description: "Trong xã hội có rất nhiều mối nguy. Nếu chúng ta đặt một người trẻ vào xã hội mà không tìm cách bảo vệ họ, họ sẽ tiếp nhận những bạo động...",
        imageURL: "de-co-mot-tuong-lai.png",
    },

];

app.get("/shop", (req, res) => {
    res.render('shop', { products: listProduct,kindOfDay : kindOfDay() })
})

app.get("/addnew", (req, res) => {
    res.render("add-product",{kindOfDay : kindOfDay()})
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

app.get("/detail/:spId", (req, res) => {
    var thutu = req.params.spId;
    var sp = listProduct[thutu];
    res.render('chitietsp', { thutu: thutu, sp: sp,kindOfDay : kindOfDay() });
})

app.listen(port, () => { console.log(`Project dang chay o port ${port}`) })