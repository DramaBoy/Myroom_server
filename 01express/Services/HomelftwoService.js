//主页左边第二个盒子信息
let HomeService = require("./HomeService");
class HomelftwoService {
    constructor() {
        //创建用户dao对象
        this.homeService = new HomeService();
    }

    getHomelftwo(call) {

        this.homeService.getHouses(function (houses) {

            call(houses);
        });
    }
}

module.exports = HomelftwoService;