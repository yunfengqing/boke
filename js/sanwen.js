$(function(){
    $(".zhank").click(function(){
        $(".zhankcon").css('display','block')
        $(".zhank1").css('display','block')
        $(".zhank").css('display','none')
    })
    $(".zhank1").click(function(){},function(){
        $(".zhankcon").css('display','none')
        $(".zhank").css('display','block')
        $(".zhank1").css('display','none')
    })
    $(".rootkg").click(function(){
        $(".rootc").css('display','block')
        $(".rootkg1").css('display','block')
        $(".rootkg").css('display','none')
    })
    $(".rootkg1").click(function(){},function(){
        $(".rootc").css('display','none')
        $(".rootkg").css('display','block')
        $(".rootkg1").css('display','none')
    })
})