$(function(){
    $(".ret").css("display", "none");
    $(window).scroll(function(){
        var st = $(document.documentElement).scrollTop();
        if(st>500) {
            $(".ret").css("display", "block");
        }
        if(st<500) {
            $(".ret").css("display", "none");
        }
    })
    $(".ret").click(function(){
        $(document.documentElement).animate({scrollTop:0},'normal');
    })
})