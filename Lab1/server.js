const exp = require('express');
var bodyParser = require("body-parser");
const app = exp();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// chua khai bao duong dan nao het

//router
app.get('/', (rep, res) => {
    res.send(`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap');
    html {
        font-family: 'Quicksand', sans-serif;
        background-color: #eee;
        text-transform: capitalize;
    }
    .container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        width: 500px;
        margin: 200px auto;
        padding: 40px 40px;
        border-radius: 50px;
    }
    </style>
    
    <div class="container">
        <h1>Đây là trang chủ</h1>
    </div>`);
})

app.get('/pd', (rep, res, next) => {
    res.send(`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap');
    html {
        font-family: 'Quicksand', sans-serif;
        background-color: #eee;
        text-transform: capitalize;
    }
    .container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        width: 500px;
        margin: 200px auto;
        padding: 40px 40px;
        border-radius: 50px;
    }
    </style>
    <div class="container">
        <h1>Đây là trang Product</h1>
    </div>`);
})

app.get('/addpd', (req, res, next) => {
    res.send(`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap');
    html {
        font-family: 'Quicksand', sans-serif;
        background-color: #eee;
        text-transform: capitalize;
    }
    .container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        width: 500px;
        margin: 200px auto;
        padding: 40px 40px;
        border-radius: 50px;
    }
    input[type=number],[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    button {
        width: 100%;
        background-color: #524eb7;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #3b388d;
    }
    </style>
    <div class="container">
        <h1>Thêm Sản phẩm</h1>
        <form action="/pd" method="GET">
            <input type="text" name="productName">
            <button type="submit">Add Product</button>
        </form>
    </div>`);
})

const inventors = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
];

app.get('/inventors', (req, res) => {
    let list = `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap');
    html {
        font-family: 'Quicksand', sans-serif;
        background-color: #eee;
        text-transform: capitalize;
    }
    .container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        width: 500px;
        margin: 200px auto;
        padding: 40px 40px;
        border-radius: 50px;
    }
    input[type=number],[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    button {
        width: 100%;
        background-color: #524eb7;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #3b388d;
    }
    </style>
    <div class="container">
    <h1>Danh sách nhà khoa học</h1>
    <ul>`;
    inventors.forEach(e => {
        list += `<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last.toUpperCase()}-(${e.year}-${e.passed})</a></li>`;
    });
    list += `</ul>
    </h2>
    </div>`;
    res.send(list);
});

app.get('/inventor/:id', (req, res) => {
    let id = req.params.id;
    inventor = inventors.find(e => e.id == id);
    info = `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap');
    html {
        font-family: 'Quicksand', sans-serif;
        background-color: #eee;
        text-transform: capitalize;
    }
    .container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        width: 500px;
        margin: 200px auto;
        padding: 40px 40px;
        border-radius: 50px;
    }
    </style>
    <div class="container">
    <h1>Thông tin nhà khoa học:</h1>
    <h2>
        <br>Full name: ${inventor.first} ${inventor.last}
        <br> Year: ${inventor.year}
        <br> Passed: ${inventor.passed} 
    </h2>
    </div>`;
    res.send(info);
});

app.get('/add-inventor', (req, res) => {
    res.send(`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap');
    html {
        font-family: 'Quicksand', sans-serif;
        background-color: #eee;
        text-transform: capitalize;
    }
    .container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        width: 500px;
        margin: 200px auto;
        padding: 40px 40px;
        border-radius: 50px;
    }
    input[type=number],[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    button {
        width: 100%;
        background-color: #524eb7;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #3b388d;
    }
    </style>
    <div class="container">
        <h1>Thêm Nhà Khoa Học</h1>
        <form action="/inventor" method="POST">
            <input type="text" name="first" placeholder="First name">
            <input type="text" name="last" placeholder="Last name">
            <br>
            <input type="number" name="year" placeholder="Year">
            <input type="number" name="passed" placeholder="Passed">
            <br>
            <button type="submit">Add Inventor</button>
        </form>
    </div>`
    );
});
app.get("/fpt", (req, res) => {
    res.send(`<div style=" @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap'); text-align: center; width: 400px; margin: 50px auto; border: 1px solid #eee; padding: 10px 30px; background: #FEECE9; color: #2F3A8F; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; font-family: 'Quicksand', sans-serif;"><h2>Thông Tin Chi Tiết Sinh Viên:
    </h2>
    <img style="border: 4px solid #2F3A8F; border-radius: 60%; object-fit: cover;" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/250822604_1769178406804119_9198591115839412928_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WsJ7YG7Hg8kAX--5LW9&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT9g51picM0WWtR2jt1Vda_tgMPfwq2XzwuVrcui7tr4KQ&oe=61DCB36A" width="300px" height="280px">
    <br><p style="margin-top: 50px;">Họ Và Tên: <b>Nguyễn Xuân Bách</b></p><br><p>Ngày sinh: <b>19/11/2002</b></p>
    <br><p>Lớp: <b> WE16302 </b></p></div>`);
});
app.post('/inventor', (req, res) => {
    let newInventor = req.body;
    newInventor.id = inventors.length + 1;
    inventors.push(newInventor);
    res.redirect('/inventors');
});

app.listen(port, () => {
    console.log(`Ứng dụng đang được chạy với port: ${port} `);
});