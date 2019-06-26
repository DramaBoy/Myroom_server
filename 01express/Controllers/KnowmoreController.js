//引入用户业务逻辑
let MoreService = require("../Services/MoreService");
module.exports.selectmore = function(req, res) {
    //1,解析selectform客户端提交的数据
    var id = req.query.id;
    //创建对象
     let moreService = new MoreService();
    // // //检查用户是否合法
    moreService.selectmore(id, function(ob) {
        res.end(JSON.stringify(ob));
    });
  
    //  res.end(JSON.stringify({name:"小花"}));
};