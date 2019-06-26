let PriceselectDao = require("../Dao/PriceselectDao");
class PriceformService {
    constructor() {
        //创建用户dao对象
        this.priceselectDao = new PriceselectDao();
    }
    priceform(price2,price3, call) {
        // console.log(weizhi);

        let object={
            code:0,
            meg:"暂无该价格段房屋",
        }

        //let num = ob.price,
        // if(price2<num && price3>num){

        //     object.ob=ob;
        // }
        this.priceselectDao.priceform(function(ob){
            
            console.log("price2"+price2);
            console.log("price3"+price3);
            console.log(ob);
            for(var i=0;i<ob.length;i++){
                let num = ob[i].price;
                console.log(ob[i].price);
                if(price2<num && price3>num){
                    call(ob)    
                }
    
                call(object);
            }
            
        });
    }
}

module.exports = PriceformService;