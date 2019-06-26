let SelectformDao = require("../Dao/SelectformDao");
class SelectformService {
    constructor() {
        //创建用户dao对象
        this.selectformDao = new SelectformDao();
    }
    selectform(weizhi, call) {
        // console.log(weizhi);
        this.selectformDao.getSelect(weizhi, function(ob) {
            call(ob);
        });
    }
}

module.exports = SelectformService;