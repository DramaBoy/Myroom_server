//主页文件上传控制器
let FileTool = require("../tools/FileTool");
let CommentsService = require("../Services/CommentsService");
exports.CommentsAdd = function (req, res) {
    //获得前端提交数据
    let textarea = req.body.textarea;
    let files = req.files;
    let username = req.body.username;
    let hotid = req.body.hotid;

    //创建业务逻辑对象
    let commentsService = new CommentsService();
    //添加数据
    commentsService.commentsAdd(textarea,username,hotid,files,function (ob) {
        res.json(ob);
    });
}