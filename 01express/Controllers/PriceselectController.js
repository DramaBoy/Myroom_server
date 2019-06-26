//引入用户业务逻辑
let PriceformService = require("../Services/PriceformService");

module.exports.priceform = function(req, res) {
    //1,解析客户端提交的数据
    var price2 = req.query.price2;
    var price3 = req.query.price3;

    //创建对象
    let priceformService = new PriceformService();
    //检查用户是否合法
    priceformService.priceform(price2,price3 , function(ob) {
        res.end(JSON.stringify(ob));
    });

  
};