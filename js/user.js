$(function(){
    $(".icon-quxiao3").css("display", "none");
    $(".liaa").hover(function () {
        $(".icon-duihao4").css("display", "none");
        $(".icon-quxiao3").css("display", "block");
    })
    $(".liaa").hover(function (){},function () {
        $(".icon-quxiao3").css("display", "none");
        $(".icon-duihao4").css("display", "block");
    })
})