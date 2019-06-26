let SqlBase = require("./SqlBase");
class abHouse2Dao extends SqlBase {
    constructor() {
        super();
    }

    getHouse2(call) {
        let abHouse2GetSql = "SELECT * from houses";
        this.connection.query(abHouse2GetSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        })
    }
  
}

module.exports = abHouse2Dao;