//主页左边第三个盒子
let HomelfthreeDao = require("../Dao/HomelfthreeDao");
class HomelfthreeService {
    constructor() {
        //创建用户dao对象
        this.homelfthreeDao = new HomelfthreeDao();
    }

    getHomelfthree(call) {

        this.homelfthreeDao.getHomelfthree(function (arrays) {

            call(JSON.stringify(arrays));
        });

        this.homelfthreeDao.closeSql();
    }
}

module.exports = HomelfthreeService;