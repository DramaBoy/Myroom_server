let SqlBase = require("./SqlBase");
class RoundDao extends SqlBase {
    constructor() {
        super();
    }

    getRound(call) {
        let roundGetSql = "SELECT * from roundpic where code='0'";
        this.connection.query(roundGetSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        })
    }
}

module.exports = RoundDao;
