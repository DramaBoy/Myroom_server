//引入用户业务逻辑
let SelectformService = require("../Services/SelectformService");
module.exports.selectform = function(req, res) {
    //1,解析selectform客户端提交的数据
    var weizhi = req.query.weizhi;
    //创建对象
     let selectformService = new SelectformService();
    // //检查用户是否合法
    selectformService.selectform(weizhi, function(ob) {
        res.end(JSON.stringify(ob));
    });
  
    // res.end(JSON.stringify({name:"小花"}));
};