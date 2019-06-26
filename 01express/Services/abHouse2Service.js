let abHouse2Dao = require("../Dao/abHouse2Dao")
class abHouse2Service {
    constructor(){
        this.AbHouse2Dao = new abHouse2Dao();
    }
    getHouse2(call) {
        this.AbHouse2Dao.getHouse2(function(ob){
            call(JSON.stringify(ob));
        })
    }
}

module.exports = abHouse2Service;