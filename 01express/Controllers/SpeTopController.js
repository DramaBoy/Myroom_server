// 楼讯页面特色专题
let SpeTopService = require("../Services/SpeTopService");

module.exports.getSpeTop = function (req, res) {

    //创建对象
    let spetopService = new SpeTopService();
    //检查用户是否合法
    spetopService.getSpeTop(function (data) {
        res.end(data);
    });
};
