//主页文件上传控制器
let FileTool = require("../tools/FileTool");
let HomeService = require("../Services/HomeService");
exports.homeAdd = function (req, res) {
    //获得前端提交数据
    let title = req.body.title;
    let site = req.body.site;
    let price = req.body.price;
    let files = req.files;

    //创建业务逻辑对象
    let homeService = new HomeService();
    //添加数据
    homeService.homeAdd(title, site, price, files, function (ob) {
        res.json(ob);
    });


    // //this.ip = "http://localhost:8888";

    // tool.uploadFile(req.files, function (path) {
    //     res.json(path);
    // });
}