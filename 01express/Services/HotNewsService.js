// 楼讯热点新闻
let HotNewsDao = require("../Dao/HotNewsDao");
class HotNewsService {
    constructor() {
        //创建用户dao对象
        this.hotnewsDao = new HotNewsDao();
    }

    getHotNews(call) {

        this.hotnewsDao.getHotNews(function (arrays) {

            call(JSON.stringify(arrays));
        });

        this.hotnewsDao.closeSql();
    }
}

module.exports = HotNewsService;