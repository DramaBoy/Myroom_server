// 楼讯热点新闻
let HotNewsService = require("../Services/HotNewsService");

module.exports.getHotNews = function (req, res) {

    //创建对象
    let hotnewsService = new HotNewsService();
    //检查用户是否合法
    hotnewsService.getHotNews(function (data) {
        res.end(data);
    });
};