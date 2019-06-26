let abHouse1Dao = require("../Dao/abHouse1Dao")
class abHouse1Service {
    constructor(){
        this.AbHouse1Dao = new abHouse1Dao();
    }
    getHouse1(call) {
        this.AbHouse1Dao.getHouse1(function(ob){
            call(JSON.stringify(ob));
        })
    }
}

module.exports = abHouse1Service;