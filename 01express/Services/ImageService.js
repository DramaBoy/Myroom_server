let ImageDao = require("../Dao/ImageDao");
class ImageService {
    constructor() {
        //创建用户dao对象
        this.imageDao = new ImageDao();
    }


    getImages(id, call) {
        this.imageDao.getImage(id, function (result) {
            call(result)
        });
    }
}

module.exports = ImageService;