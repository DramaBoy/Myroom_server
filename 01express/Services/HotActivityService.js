let HotActivityDao = require("../Dao/HotActivityDao");
let ImgsService = require("./ImgsService");
class HotActivityService {
    constructor() {
        //创建用户dao对象
        this.hotActivityDao = new HotActivityDao();
        this.imgsService = new ImgsService();
    }
    getItems(call) {
        this.hotActivityDao.getItems(function (result) {
            call(result)
        });
    }
    getInfo(pid, call) {

        //1，保存this
        let that = this;
        let ob = {
            code: 0,
            msg: "操作失败!"
        }
        this.hotActivityDao.getInfo(pid, function (result) {
            if (result.length >= 1) {

                let hotid = result[0].hotid;
                that.imgsService.getImages(1, hotid, function (imgs) {

                    result[0].imgs = imgs;
                    ob.code = 1;
                    ob.msg = "执行成功！";
                    ob.data = result;
                    console.log(ob);
                    call(ob);
                });

            } else {
                call(ob);
            }
        });
    }
    getImages(pid, call) {
        this.hotActivityDao.getImages(pid, function (result) {
            call(result)
        });
    }
}

module.exports = HotActivityService;