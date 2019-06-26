// 楼讯热点新闻
let SqlBase = require("./SqlBase");
class HotNews extends SqlBase {
    constructor() {
        super();
    }
    // headline content data imgrl
    getHotNews(call) {
        var sql = "SELECT * from HotNews ";
        //4,进行查询操作
        //         /**
        //          *query，mysql语句执行的方法
        //          * 1，userAddSql编写的sql语句
        //          * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
        //          */
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = HotNews;