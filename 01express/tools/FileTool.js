let fs = require("fs");
let config = require('../config/config');
class FileTool {
    constructor() {

    }

    uploadFile(files, call) {
        let ip = this.ip;
        //获得文件路径
        var src_path = files[0].path;
        //重新设置文件的名字
        var fileName = new Date().getTime() + ".jpg";
        //设置完整的名字
        var des_path = files[0].destination + fileName;

        fs.rename(src_path, des_path, function (err) {
            if (err) {
                throw err;
            }
            fs.stat(des_path, function (err, stat) {
                //成功的上传图片后，会调用当前方法
                if (err) {
                    throw err;
                }

                var path = config.fileUploadPath + fileName;

                call(path);
            });
        });
    }
    uploadFiles(files, call) {
        let ip = this.ip;
        var src_path =[];
        var des_path =[];
        var fileName=[];
        var path=[];
        for (let i = 0; i < files.length; i++) {
            //获得文件路径
            src_path.push(files[i].path);
            //重新设置文件的名字
            fileName.push(new Date().getTime() + ".jpg");
            //设置完整的名字
            des_path.push(files[i].destination + fileName);
            fs.rename(src_path[i], des_path[i], function (err) {
                if (err) {
                    throw err;
                }
                fs.stat(des_path[i], function (err, stat) {
                    //成功的上传图片后，会调用当前方法
                    if (err) {
                        throw err;
                    }
                    path.push(config.fileUploadPath + fileName[i]);
                    console.log(path)
                    if(i==files.length-1){
                        call(path);
                        return
                    }
                });
            });
        }     
    }
}
module.exports = FileTool;