$(document).ready(function () {
    var user = $(".user");
    var password = $(".password");
    var password1 = $(".password1");
    var btn = $(".btn");
    var userreg = /^[a-z]\w{5,11}$/i;
    var passreg = /^[0-9]\w{5,11}$/;
    var uservale;
    var passwordvale;
    var password1vale;
    var fs;
    var flag;
    user.keyup(function () {
        uservale = user.val();
//      判断名字
        if (!userreg.test(uservale)) {
//            check()
            $(this).next().html("用户名格式错误").css({"display": "block", "color": "red"});
            $(this).data("false");
            flag = false;
            return;
        } else {
            var that = $(this);
            $.ajax({
                url: "index.php?m=index&f=zhuce&a=usercheck",
                type: "post",
                data: {user: uservale},
                success: function (data) {
                    if (data == "ok") {
                        that.next().css({"display": "block", "color": "green"}).html("用户名格式正确");
                        that.data("true");
                        flag = true;
                    } else {
                        that.next().css({"display": "block", "color": "red"}).html("用户名已被占用");
                        that.data("false");
                        flag = false;
                    }
                }
            })
        }
    })
//        判断密码
    password.keyup(function () {
        passwordvale = password.val();
        password1vale = password1.val();
//            let that=$(this);
        if (!passreg.test(passwordvale)) {
//                check()
            $(this).next().css({"display": "block", "color": "red"}).html("密码格式错误");
            $(this).data("false")
            flag = false;
        }
        else if (passwordvale != password1vale) {
//                check()
            $(this).next().css({"display": "block", "color": "green"}).html("两次密码不一致");
            $(this).data("false")
            flag = false;
        }
        else {
            check()
            $(this).next().css({"display": "block", "color": "green"}).html("两次密码一致");
            password1.next().html("两次密码一致");
            $(this).data("true");
            flag = true;
        }
    })
//        判断密码
    password1.keyup(function () {
        passwordvale = password.val();
        password1vale = password1.val();
//            var that=$(this)
        if (!passreg.test(passwordvale)) {
//                check()
            $(this).next().css({"display": "block", "color": "red"}).html("密码格式错误");
            $(this).data("false")
            flag = false;
        }
        else if (passwordvale != password1vale) {
//                check()
            $(this).next().css({"display": "block", "color": "green"}).html("两次密码不一致");
            $(this).data("false");
            flag = false;
        }
        else {
            check()
            $(this).next().css({"display": "block", "color": "green"}).html("两次密码一致");
            password.next().html("两次密码一致");
            $(this).data("true");
            flag = true;
        }
    })

    function check() {
        if (flag === false) {
            btn.removeAttr("disabled")
        } else {

            btn.attr("disabled")
        }
    }
})