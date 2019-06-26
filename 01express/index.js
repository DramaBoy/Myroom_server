//1,引入express
var express = require("express");
var app = express();

//2,静态文件
app.use(express.static("public"));

//3,设置跨域访问
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//3,引入body-parser模块
var bodyParser = require("body-parser");
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

//上传文件需要的组件
var multer = require('multer');


//引入loginController
let loginController = require("./Controllers/LoginController");
app.post("/login", urlencodedParser, loginController.login);

//引入RegisterController
let registerController = require("./Controllers/RegisterController");
app.post("/register", urlencodedParser, registerController.register);

let changepwController = require("./Controllers/changepwController");
app.post("/clientChange", urlencodedParser, changepwController.clientChange);

//****主页左边第二个盒子数据请求********
let HomelftwoController = require("./Controllers/HomelftwoController");
app.get("/Homelftwo", urlencodedParser, HomelftwoController.getHomelftwo);
//****主页左边第三个盒子数据请求********
let HomelfthreeController = require("./Controllers/HomelfthreeController");
app.get("/Homelfthree", urlencodedParser, HomelfthreeController.getHomelfthree);


// 引入楼讯主页页面信息
let BarmainController = require("./Controllers/BarmainController");
app.get("/Barmain", urlencodedParser, BarmainController.getBarmain);
// 引入楼讯导购页面信息
let DaogouController = require("./Controllers/DaogouController");
app.get("/Daogou", urlencodedParser, DaogouController.getDaogou);
// 引入楼讯热点新闻页面信息
let HotNewsController = require("./Controllers/HotNewsController");
app.get("/HotNews", urlencodedParser, HotNewsController.getHotNews);
// 引入楼讯特色专题页面信息
let SpeTopController = require("./Controllers/SpeTopController");
app.get("/SpeTop", urlencodedParser, SpeTopController.getSpeTop);



//引入NewHouseController.1
let newHouseController = require("./Controllers/NewHouseController");
app.get("/getHouses", newHouseController.getHouses)


//引入SelectformController
let SelectformController = require("./Controllers/SelectformController");
app.get("/selectform", SelectformController.selectform)

//引入PriceselectController
let PriceselectController = require("./Controllers/PriceselectController");
app.get("/priceform", PriceselectController.priceform)

//引入海外轮播图信息
let abRoundController = require("./Controllers/abRoundController");
app.get("/getRound", abRoundController.getRound)

//引入海外信息
let abHouse1Controller = require("./Controllers/abHouse1Controller");
app.get("/getHouse1", abHouse1Controller.getHouse1)
let abHouse2Controller = require("./Controllers/abHouse2Controller");
app.get("/getHouse2", abHouse2Controller.getHouse2)

//引入热门活动模块
let HotActivityController = require("./Controllers/HotActivityController");
app.post("/hotactivity", urlencodedParser, HotActivityController.getItems);

//引入热门详情模块
let HotInfoController = require("./Controllers/HotInfoController");
app.post("/hotinfo", urlencodedParser, HotInfoController.getInfo);

//引入房屋详情模块
let KnowmoreController = require("./Controllers/KnowmoreController");
app.get("/more", KnowmoreController.selectmore);

//引入新房图片模块
let ImageController = require("./Controllers/ImageController");
app.get("/image", ImageController.image);





//后台管理添加主页热门楼盘信息
// var HomeaddController = require("./Controllers/HomeaddController");
// app.post("/homeadd", urlencodedParser, HomeaddController.add);

var HomeaddController = require('./Controllers/HomeAddController');


let config = require('./config/config');
app.post('/homeAdd', multer({
    dest: __dirname + config.fileUploadPath
}).array('image'), function (req, res) {
    HomeaddController.homeAdd(req, res);
})

//后台管理页面查询数据
let AdminController = require("./Controllers/AdminController");
app.get("/Admin", urlencodedParser, AdminController.getAdmin);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload/imgs')
    },
    filename: function (req, file, cb) {
        var fileName = new Date().getTime();
        var str = file.originalname.split('.');
        cb(null, fileName + '.' + str[1]);
    }
})
var upload = multer({
    storage: storage
});
let CommentsController = require("./Controllers/CommentsController");
app.post("/commentsAdd", upload.array("image", 20), function (req, res, next) {
    var arr = [];
    for (var i in req.files) {
        console.log(req.files[i]);
        arr.push(req.files[i].path);
    }
    res.json({
        code: 200,
        data: arr
    })

    CommentsController.CommentsAdd(req,res)
})


//监听
app.listen(8888, () => {
    console.log("启动服务器成功");
});