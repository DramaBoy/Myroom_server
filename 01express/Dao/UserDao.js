let SqlBase = require("./SqlBase");
class UserDao extends SqlBase {
    constructor() {
        super();
    }

    checkUser(name, call) {
        var userGetSql = "SELECT * from user where name ='" + name + "'";
        //4,进行查询操作
//         /**
//          *query，mysql语句执行的方法
//          * 1，userAddSql编写的sql语句
//          * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
//          */
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        });
    }

    insertUser(name, passwd, call) {
        let code = 1;
        let params = [name, passwd];
        var add_sql = "INSERT INTO user(name,passwd) values(?,?)";
        this.connection.query(add_sql, params, function (err, result) {
            console.log(params);
            if (err) {
                return;
                code = 0;
            }
            call(code);
        });
    }

    changeUser(name, passwd, call) {
        let code = 1;
        let change_sql = 'UPDATE user SET passwd=? WHERE name=?';
        let params=[passwd,name]      
        this.connection.query(change_sql, params,function (err, result) {
            if (err) {
                return;
                code = 0;
            }
            console.log(result)
            call(code);
        });
    }
}

module.exports = UserDao;
