//引入用户业务逻辑
let ImageService = require("../Services/ImageService");
module.exports.image = function(req, res) {
    //1,解析selectform客户端提交的数据
    var id = req.query.id;
    console.log("id=="+id)
    // //创建对象
     let imageService = new ImageService();
    // // // //检查用户是否合法
    imageService.getImages(id, function(ob) {
        res.end(JSON.stringify(ob));
    });
  
    //  res.end(JSON.stringify({name:"小花"}));
};