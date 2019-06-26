let SqlBase = require("./SqlBase");
class HotActivityDao extends SqlBase {
    constructor() {
        super();
    }

    getItems(call) {
        var getSql = "SELECT * from HotActivity";
        this.connection.query(getSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        });
    }
    getInfo(pid,call) {
        var getSql = "SELECT * from HotActivity where hotid ='" + pid + "'";
        this.connection.query(getSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = HotActivityDao;
