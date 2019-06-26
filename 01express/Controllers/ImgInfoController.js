let HotActivityService = require("../Services/HotActivityService");

module.exports.getImages = function(req, res) {
    var pid = req.body.hotid;
    console.log(pid)
    //创建对象
    let hotService = new HotActivityService();
    hotService.getImages(pid,function(ob){
        res.end(JSON.stringify(ob));
    })
};