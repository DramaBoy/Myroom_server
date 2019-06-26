let SqlBase = require("./SqlBase");
class ImgsDao extends SqlBase {
    constructor() {
        super();
    }

    getImages(type, pid, call) {
        var getSql = "SELECT * from imgs where type=" + type + " and img_id ='" + pid + "'";
        this.connection.query(getSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        });
    }
}

module.exports = ImgsDao;