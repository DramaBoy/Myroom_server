// 主页左边第二个盒子信息
let SqlBase = require("./SqlBase");
class Homelftwo extends SqlBase {
    constructor() {
        super();
    }
    // headline content data imgrl
    getHomelftwo(call) {
        var sql = "SELECT * from Homelfbox2";
        // var sql2 = "SELECT * from Homelfbox3"; 
        // var sql  =sql1+sql2;
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

module.exports = Homelftwo;