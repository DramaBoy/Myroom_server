let SqlBase = require("./SqlBase");
class PriceselectDao extends SqlBase {
    constructor() {
        super();
    }

    priceform(call) {
        var priceGetSql = "SELECT * from newhouselist";
        //4,进行查询操作
        //         /**
        //          *query，mysql语句执行的方法
        //          * 1，userAddSql编写的sql语句
        //          * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
        //          */

        console.log(priceGetSql);
        this.connection.query(priceGetSql, function (err, result) {
            if (err) {
                console.log("[查询错误] - ", err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = PriceselectDao;