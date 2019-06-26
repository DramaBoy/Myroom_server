// 楼讯首页
//引入用户业务逻辑
let BarmainService = require("../Services/BarmainService");

module.exports.getBarmain= function (req, res) {

    //创建对象
    let barmainService = new BarmainService();
    //检查用户是否合法
    barmainService.getBarmain(function (data) {
        res.end(data);
    });
};