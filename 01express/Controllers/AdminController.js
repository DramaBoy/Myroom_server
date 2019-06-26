//引入用户业务逻辑
let AdminService = require("../Services/AdminService");

module.exports.getAdmin= function (req, res) {

    //创建对象
    let adminService = new AdminService();
    //检查用户是否合法
    adminService.getAdmin(function (ob) {
        res.end(ob);
    });
};