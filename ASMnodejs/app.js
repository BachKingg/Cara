var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var jwt = require('jsonwebtoken');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sanphamRouter = require('./routes/sanpham');
var danhmucRouter = require('./routes/danhmuc');
var blogRouter = require('./routes/blog');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var cartRouter = require('./routes/cart');
var ordersRouter = require('./routes/orders');
var orders_detailsRouter = require('./routes/orders_details');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sanpham', sanphamRouter);
app.use('/danhmuc', danhmucRouter);
app.use('/blog', blogRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/cart', cartRouter);
app.use('/orders', ordersRouter);
app.use('/orders_details', orders_detailsRouter);



let user = {
    id: "lakdjfvbnkj2424t2",
    email: "bach@gmail.com",
    password: "asjdnvkjasndva; 'wprihjgieprhjg324909"
}

const JWT_SECRET = 'some super secret...';

app.get('/forgot-password', (req, res, next) => {
    res.render('forgot-password');
});

app.post('/forgot-password', (req, res, next) => {
    const { email } = req.body;
    res.send(email);
    // Make sure user exist in database
    if (email !== user.email) {
        res.send('USer not registered');
        return;
    }
    // User exist and now create a One time link valid for 15minutes
    const secret = JWT_SECRET + user.password;
    const payload = {
        email: user.email,
        id: user.id
    };
    const token = jwt.sign(payload, secret, { expiresIn: '15m' });
    const link = `http://localhost:3000/reset-password/${user.id}/${token}`
    console.log(link);
    res.send('Password reset link has been sent to ur email...');
});

app.get('/reset-password/:id/:token', (req, res, next) => {
    const { id, token } = req.params;
    res.send(req.params);
})

app.post('/reset-password', (req, res, next) => { });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
