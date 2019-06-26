let RoundDao = require("../Dao/RoundDao")
class RoundService {
    constructor(){
        this.roundDao = new RoundDao();
    }
    getRound(call) {
        this.roundDao.getRound(function(ob){
            call(JSON.stringify(ob));
        })
    }
}

module.exports = RoundService;