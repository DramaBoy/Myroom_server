let SqlBase = require("./SqlBase");
class HouseDao extends SqlBase {
    constructor() {
        super();
    }

    getHouses(call) {
        var houseGetSql = "SELECT * from newhouselist";
        this.connection.query(houseGetSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        })
    }
}

module.exports = HouseDao;
