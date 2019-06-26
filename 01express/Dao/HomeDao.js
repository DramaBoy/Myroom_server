//引入SqlBase
let SqlBase = require("./SqlBase");
class HomeDao extends SqlBase {
    constructor() {
        super();
    }
    // 卖家页面  产品添加
    addHouse(title, site, price, path, call) {
        var addmessageInsertSql = "insert into Homelfbox2(title, site, price,imgurl) values('" + title + "','" + site + "','" + price + "','" + path + "')";
        this.connection.query(addmessageInsertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
        });
    }

    // 卖家页面  产品添加
    getHouse(call) {
        var sql = "SELECT * from Homelfbox2";

        console.log(sql);
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);
        });
    }

}

module.exports = HomeDao