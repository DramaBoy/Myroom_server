let MoreDao = require("../Dao/MoreDao");
class MoreService {
    constructor() {
        //创建用户dao对象
        this.moreDao = new MoreDao();
    }
    selectmore(id, call) {
        // console.log(weizhi);
        this.moreDao.getMore(id, function(ob) {
            call(ob);
        });
    }
}

module.exports = MoreService;