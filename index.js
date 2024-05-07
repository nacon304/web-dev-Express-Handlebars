const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const expressHbs = require('express-handlebars');

app.use(express.static(__dirname + "/html"));
// câu lệnh trả ra trang người dùng cần

app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout"
}))
app.set("view engine", "hbs");
// cấu hình các file view

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + '/html/index.htm');
// });
// // trang mặc định trả về là index.html, nên khi chuyển sang tên.htm phải định nghĩa lại

app.get("/", (req, res) => {
    res.render("index", {title: "21120107"});
});
// để code trong render bỏ vào phần body trong layout

app.use('/task1', require('./routes/task1Route'));
// app.get('/task1', (req, res) => res.render("task1", {title: "Task 1"}));
// // cach 1
// app.get('/task1', (req, res) => {
//     res.locals.title = "Task 1"
//     res.render("task1");
// });
// // cach 2

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// thêm 2 dòng này để nhận dữ liệu post

app.use('/task2', require('./routes/task2Route'));
app.use('/task3', require('./routes/task3Route'));
app.use('/task4', require('./routes/task4Route'));
app.get('/task4-details', (req, res) => res.render("task4-details", {title: "Task 4 - Details"}));

app.get("/error", (req, res) => {
    throw new Error("error");
})

app.use((req, res) => {
    res.send("Request not found!");
})

app.use((error, req, res, next) => {
    console.error(error);
    res.send("Sever error!");
})
// 2 hàm này thường đặt cuối trang

app.listen(port, () => console.log(`Example app listening on port ${port}!`));