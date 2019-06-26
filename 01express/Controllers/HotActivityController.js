let HotActivityService = require("../Services/HotActivityService");

module.exports.getItems = function(req, res) {
    let hotService = new HotActivityService();
    
    hotService.getItems(function(ob) {
        res.end(JSON.stringify(ob));
    });
};