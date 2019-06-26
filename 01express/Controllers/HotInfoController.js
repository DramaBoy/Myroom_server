let HotActivityService = require("../Services/HotActivityService");

module.exports.getInfo = function(req, res) {
    var pid = req.body.hotid;
    //创建对象
    let hotService = new HotActivityService();
    hotService.getInfo(pid,function(ob){
        res.end(JSON.stringify(ob));
    })
};