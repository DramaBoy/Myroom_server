let CommentsDao = require('../Dao/CommentsDao');
let FileTool = require("../tools/FileTool");
let config = require('../config/config');
class CommentsService {
    constructor() {
        this.commentsDao = new CommentsDao();
        this.fileTool = new FileTool();
    }


    commentsAdd(textarea,username, hotid,files, call) {
        let ob = {
            msg: "添加失败！",
            code: -1
        }
        let that = this;
        //首先把图片保存到服务器
        this.fileTool.uploadFiles(files, function (path) {
            //图片保存后，把数据添加到数据
            console.log(path)
            that.commentsDao.addComments(textarea,username,hotid,path, function (data) {
                ob.id = data.insertId;
                ob.code = 1;
                ob.msg = "添加成功！";
                ob.imgPath = "http://192.168.3.118:8888" + path;
                call(ob);
            });
        });
    }

    getComments(hotid,call) {
        this.commentsDao.getComments(hotid,function (comments) {
            //1,遍历房子
            let length = comments.length;
            for (let i = 0; i < length; i++) {
                //取出来的是相对路径，把固定的服务器地址和相对路径拼凑为绝对路径
                comments[i].url = config.ip + comments[i].url;
            }
            call(comments);
        });
    }
}
module.exports = CommentsService