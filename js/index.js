$(function(){
    var next=0;
    let rights=$('.icon-houtuiqianjin')
    let lefts=$('.icon-houtuiqianjin1');
    let t1= setInterval(movej,4000);
    var flag=true;
    let firstpbott=$('.ban-rig');
    firstpbott.eq(0).addClass("firstpbott1");
    firstpbott.eq(2).addClass("firstpbott2");
    let t0=setInterval(function(){move("l")},4000);
    var tu=$('.ban-left>a');
    tu.mouseenter(function(){
        clearInterval(t0);
        clearInterval(t1);
    });
    tu.mouseleave(function(){
        t0=setInterval(function(){move("l")},4000);
        t1=setInterval(movej,4000);
    });
    firstpbott.mouseenter(function(){
        clearInterval(t0);
        clearInterval(t1);
    });
    firstpbott.mouseleave(function(){
        t0=setInterval(function(){move("l")},4000);
        t1=setInterval(movej,4000);
    });
    lefts.mouseenter(function(){
        clearInterval(t1);
        clearInterval(t0);
    });
    lefts.mouseleave(function(){
        t1=setInterval(movej,4000);
        t0=setInterval(function(){move("l")},4000);
    });
    rights.mouseenter(function(){
        clearInterval(t1);
        clearInterval(t0);
    });
    rights.mouseleave(function(){
        t1=setInterval(movej,4000);
        t0=setInterval(function(){move("l")},4000);
    });
    function move(m){
        if(m=="l"){
            next++
            if(next==tu.length){
                next=0;
            }
        }
        if(m=="r"){
            next--
            if(next<0){
                next=tu.length-1
            }
        }
        $('.ban-left>a').css({"z-index":0,"opacity":0});
        $(".ban-left>a:eq("+next+")").animate().css({"z-index":1,"opacity":1})
    }

//    上下

    function movej(){
        let tops=firstpbott.eq(0).position().top;
        let tops1=firstpbott.eq(1).position().top;
        let tops2=firstpbott.eq(2).position().top;
        firstpbott.css('opacity',1);
        if(firstpbott.eq(2).position().top==-411){
            firstpbott.eq(2).css('opacity',0);
            tops2=411;
        }else if(firstpbott.eq(0).position().top==-411){
            firstpbott.eq(0).css('opacity',0);
            tops=411;
        }else if(firstpbott.eq(1).position().top==-411){
            firstpbott.eq(1).css('opacity',0);
            tops1=411;
        }
        firstpbott.eq(0).animate({top:tops-137}, 1000);
        firstpbott.eq(1).animate({top:tops1-137}, 1000);
        firstpbott.eq(2).animate({top:tops2-137}, 1000,function () {
            flag=true;
        });
    }

    // 点击
    lefts.click(function () {
        if(!flag){
            return;
        }
        flag=false;
        movej();
        move("l")
    });
    rights.click(function () {
        move("r")
        if(!flag){
            return;
        }
        flag=false;
        let topss=firstpbott.eq(0).position().top;
        let tops1=firstpbott.eq(1).position().top;
        let tops2=firstpbott.eq(2).position().top;
        firstpbott.css('opacity','1');
        if(firstpbott.eq(2).position().top==411){
            firstpbott.eq(2).css('opacity','0');
            tops2=-411;

        }else if(firstpbott.eq(0).position().top==411){
            firstpbott.eq(0).css('opacity','0');
            topss=-411;
        }else if(firstpbott.eq(1).position().top==411){
            firstpbott.eq(1).css('opacity','0');
            tops1=-411;
        }
        firstpbott.eq(0).animate({top:topss+137}, 1000);
        firstpbott.eq(1).animate({top:tops1+137}, 1000);
        firstpbott.eq(2).animate({top:tops2+137}, 1000,function () {
            flag=true;
        });
    });
})