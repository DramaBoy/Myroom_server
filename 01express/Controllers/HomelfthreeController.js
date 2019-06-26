// 主页左边第三个盒子信息
let HomelfthreeService = require("../Services/HomelfthreeService");

module.exports.getHomelfthree = function (req, res) {

    //创建对象
    let homelfthreeService = new HomelfthreeService();
    //检查用户是否合法
    homelfthreeService.getHomelfthree(function (data) {
        res.end(data);
    });
};