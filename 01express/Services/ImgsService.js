let ImgsDao = require("../Dao/ImgsDao");
class ImgsService {
    constructor() {
        //创建用户dao对象
        this.imgsDao = new ImgsDao();
    }


    getImages(type, pid, call) {
        this.imgsDao.getImages(type, pid, function (result) {
            call(result)
        });
    }
}

module.exports = ImgsService;