$(function(){
    $("form").validate({
        rules:{
            aname:{
                required:true,
                minlength:2
            }
        },
        messages:{
            aname:{
                required:"用户名必填",
                minlength:"不能少于2位"
            }
        }
    })
    var index=$("li>a");
    index.click(function () {
        var phone=$(".aphone").val();
        $.ajax({
            url:"index.php?m=admin&f=login&a=sendCode",
            type:"post",
            data:{phonecode:phone},
            success:function (e) {
                if(e){
                    index.html("发送成功");
                }
            }
        })
    })
})

