let HomeDao = require('../Dao/HomeDao');
let FileTool = require("../tools/FileTool");




let config = require('../config/config');
class HomeService {
    constructor() {
        this.homeDao = new HomeDao();
        this.fileTool = new FileTool();
    }


    homeAdd(title, site, price, files, call) {

        let ob = {
            msg: "添加失败！",
            code: -1
        }
        let that = this;
        //首先把图片保存到服务器
        this.fileTool.uploadFile(files, function (path) {
            //图片保存后，把数据添加到数据
            that.homeDao.addHouse(title, site, price, path, function (data) {
                ob.id = data.insertId;
                console.log(path);
                
                ob.code = 1;
                ob.msg = "添加成功！";
                ob.imgPath = "http://localhost:8888" + path;
                call(ob);
            });
        });

    }

    getHouses(call) {
        this.homeDao.getHouse(function (houses) {
            //1,遍历房子
            let length = houses.length;
            for (let i = 0; i < length; i++) {
                //取出来的是相对路径，把固定的服务器地址和相对路径拼凑为绝对路径
                houses[i].imgurl = config.ip + houses[i].imgurl;
            }
            call(houses);
        });
    }
}
module.exports = HomeService