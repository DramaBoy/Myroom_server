//引入用户业务逻辑
let abHouse1Service = require("../Services/abHouse1Service");

module.exports.getHouse1 = function(req, res) {
    
    //创建对象
    let AbHouse1Service = new abHouse1Service();
    //检查用户是否合法
    AbHouse1Service.getHouse1(function(ob) {
        res.end(ob);
    });
   
};