let HouseDao = require("../Dao/HouseDao");
class HouseService {
    constructor() {
        //创建用户dao对象
        this.houseDao = new HouseDao();
    }
    getHouses( call) {
        
        this.houseDao.getHouses(function (ob) {
            call(JSON.stringify(ob));
        });
    }
   
}

module.exports = HouseService;