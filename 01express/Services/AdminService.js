// 楼讯首页内容
let AdminDao = require("../Dao/AdminDao");
class AdminService {
    constructor() {
        //创建用户dao对象
        this.adminDao = new AdminDao();
    }

    getAdmin(call) {

        this.adminDao.getAdmin(function (arrays) {

            call(JSON.stringify(arrays));
        });

        this.adminDao.closeSql();
    }
}

module.exports = AdminService;