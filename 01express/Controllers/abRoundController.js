//引入用户业务逻辑
let RoundService = require("../Services/RoundService");

module.exports.getRound = function(req, res) {
    
    //创建对象
    let roundService = new RoundService();
    //检查用户是否合法
    roundService.getRound(function(ob) {
        res.end(ob);
    });
};