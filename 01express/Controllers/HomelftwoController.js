// 主页左边第二个盒子信息
let HomelftwoService = require("../Services/HomelftwoService");

module.exports.getHomelftwo = function (req, res) {

    //创建对象
    let homelftwoService = new HomelftwoService();
    //检查用户是否合法
    homelftwoService.getHomelftwo(function (data) {
        res.json(data);
    });
};