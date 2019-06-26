let SqlBase = require("./SqlBase");
class abHouse1Dao extends SqlBase {
    constructor() {
        super();
    }

    getHouse1(call) {
        let abHouse1GetSql = "SELECT * from reconmend re left join houses h on re.house_id=h.id";
        this.connection.query(abHouse1GetSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        })
    }
  
}

module.exports = abHouse1Dao;