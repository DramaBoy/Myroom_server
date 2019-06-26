//引入用户业务逻辑
let HouseService = require("../Services/HouseService");

module.exports.getHouses = function(req, res) {
    //创建对象
    let houseService = new HouseService();
    //检查用户是否合法
    houseService.getHouses(function(ob) {
        res.end(ob);
    });
};