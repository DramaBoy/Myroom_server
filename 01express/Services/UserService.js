let UserDao = require("../Dao/UserDao");
class UserService {
    constructor() {
        //创建用户dao对象
        this.userDao = new UserDao();
    }
    insertUser(name, passwd, call) {
        //1,对用户名加密
        //2,加密后的数据进行插入
        let result = {
            code: 1,
            msg: "注册成功"
        }
        let userDao = this.userDao;
        userDao.checkUser(name, function (ob) {
            if (ob.length >= 1) {
                result.code = 0;
                result.msg = "用户已经存在!";
                call(result);
            } else {
                userDao.insertUser(name, passwd, function (data) {
                    if (data != 1) {
                        result.code = 0;
                        result.msg = "注册失败!";
                    }
                    call(result);
                });
            }
        });
    }
    checkUser(name, passwd, call) {
        let ob = {
            code: 0,
            msg: "用户合法"
        };
        this.userDao.checkUser(name, function(arrays) {
            if (arrays.length >= 1) {
                //从数据库里面取出用户密码
                let buffer = arrays[0].passwd;
                //判断数据库的密码是否和用户提交的密码一样
                if (passwd !== buffer) {
                    ob.code = 2; //用户密码不对
                    ob.msg = "密码错误，请重新输入"; //
                }
            } else {
                ob.code = 1; //用户不存在
                ob.msg = "用户不存在，请注册新用户"; //
            }

            call(ob);
        });
    }
    changeUser(name, passwd, call) {
        let ob = {
            code: 1,
            msg: "修改成功"
        }
        let userDao = this.userDao;
        userDao.changeUser(name, passwd,function (result) {
            if (result == 0) {
                ob.code =0 ;
                ob.msg='修改失败'
            }
            call(ob) 
        });
    }
}

module.exports = UserService;