// 楼讯首页内容
let BarmainDao = require("../Dao/BarmainDao");
class BarmainService {
    constructor() {
        //创建用户dao对象
        this.barmainDao = new BarmainDao();
    }
   
    getBarmain(call) {
       
        this.barmainDao.getBarmain(function (arrays) {
         
            call(JSON.stringify(arrays));
        });

        this.barmainDao.closeSql();
    }
}

module.exports = BarmainService;