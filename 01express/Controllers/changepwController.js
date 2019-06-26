//引入用户业务逻辑
let UserService = require("../Services/UserService");

module.exports.clientChange = function(req, res) {
   
    var name = req.body.name
    var passwd = req.body.passwd;

    //创建对象
    let userService = new UserService();
    
    userService.changeUser(name, passwd, function(ob) {
        res.end(JSON.stringify(ob));
    });
};