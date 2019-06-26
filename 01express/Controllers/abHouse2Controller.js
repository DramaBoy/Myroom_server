//引入用户业务逻辑
let abHouse2Service = require("../Services/abHouse2Service");

module.exports.getHouse2 = function(req, res) {
    //创建对象
    let AbHouse2Service = new abHouse2Service();
    //检查用户是否合法
    AbHouse2Service.getHouse2(function(ob) {
        res.end(ob);
    });
   
};