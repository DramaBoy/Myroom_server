//引入用户业务逻辑
let UserService = require("../Services/UserService");

module.exports.login = function(req, res) {
    //1,解析客户端提交的数据
    var name = req.body.name;
    var passwd = req.body.passwd;

    //创建对象
    let userService = new UserService();
    //检查用户是否合法
    userService.checkUser(name, passwd, function(ob) {
        res.end(JSON.stringify(ob));
    });
};