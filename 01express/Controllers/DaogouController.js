// 楼讯导购
let DaogouService = require("../Services/DaogouService");

module.exports.getDaogou = function (req, res) {

    //创建对象
    let daogouService = new DaogouService();
    //检查用户是否合法
    daogouService.getDaogou(function (data) {
        res.end(data);
    });
};