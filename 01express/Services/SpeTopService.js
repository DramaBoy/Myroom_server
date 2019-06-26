// 楼讯页面特色专题
let SpeTopDao = require("../Dao/SpeTopDao");
class SpeTopService {
    constructor() {
        //创建用户dao对象
        this.spetopDao = new SpeTopDao();
    }
    getSpeTop(call) {
        this.spetopDao.getSpeTop(function (arrays) {
            call(JSON.stringify(arrays));
        });

        this.spetopDao.closeSql();
    }
}
module.exports = SpeTopService;