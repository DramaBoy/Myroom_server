let SqlBase = require("./SqlBase");
class MoreDao extends SqlBase {
    constructor() {
        super();
    }

    getMore(id, call) {
        var idGetSql = "SELECT * from newhouselist where id ='" + id + "'";
        //4,进行查询操作
        //         /**
        //          *query，mysql语句执行的方法
        //          * 1，userAddSql编写的sql语句
        //          * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
        //          */

        console.log(idGetSql);
        this.connection.query(idGetSql, function (err, result) {
            if (err) {
                console.log("[查询错误] - ", err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = MoreDao;