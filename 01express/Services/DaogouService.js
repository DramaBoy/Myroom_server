// 楼讯导购
let DaogouDao = require("../Dao/DaogouDao");
class DaogouService {
    constructor() {
        //创建用户dao对象
        this.daogouDao = new DaogouDao();
    }

    getDaogou(call) {

        this.daogouDao.getDaogou(function (arrays) {

            call(JSON.stringify(arrays));
        });

        this.daogouDao.closeSql();
    }
}

module.exports = DaogouService;
