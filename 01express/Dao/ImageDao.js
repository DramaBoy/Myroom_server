let SqlBase = require("./SqlBase");
class ImageDao extends SqlBase {
    constructor() {
        super();
    }

    getImage(id, call) {
        var imageGetSql = "SELECT * from newhouseimage where whose ='" + id + "'";
        //4,进行查询操作
        //         /**
        //          *query，mysql语句执行的方法
        //          * 1，userAddSql编写的sql语句
        //          * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
        //          */

        console.log(imageGetSql);
        this.connection.query(imageGetSql, function (err, result) {
            if (err) {
                console.log("[查询错误] - ", err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = ImageDao;