window.onload=function () {
    var uploadobj=new upload();
    uploadobj.createView({parent:document.querySelector(".parent")});

    uploadobj.up("index.php?m=admin&f=addUser&a=upload",function (e){
        document.querySelector("input[type=hidden]").value=e.join(";");
    });
}