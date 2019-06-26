//引入SqlBase
let SqlBase = require("./SqlBase");
class CommentsDao extends SqlBase {
    constructor() {
        super();
    }
    // 卖家页面  产品添加
    addComments(textarea,username,hotid,path,call) {
        var addSql1 = "insert into HotActivityComments(content,name,pid) values('" + textarea + "','" + username + "','" + hotid + "')";
        this.connection.query(addSql1, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return
            }
            // call(result);
        });
    
        for(let i=0;i<path.length;i++){
            var addSql2 =  "insert into imgs(url,type,img_id) values('" + path[i] + "','2','" + hotid + "')";
            this.connection.query(addSql2, function (err, result) {
                if (err) {
                    console.log("[INSERT ERROR]-", err.message);
                    return;
                }
                call(result);
            });
        }
    }

    // 卖家页面  产品添加
    getComments(hotid,call) {
        var sql = "SELECT h*,i* from HotActivityComments as h LEFT JOIN imgs as i on h.pid=i.imgid where type=2 and img_id ='" + hotid + "'";
        // var sql2 = "SELECT * from imgs where type=2 and img_id ='" + hotid + "'";
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            call(result);
        });
    }

}

module.exports = CommentsDao