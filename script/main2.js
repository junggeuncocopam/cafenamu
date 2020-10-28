// main2.js

$(function(){
    $('.depth1 > li').hover(
        function(){
            $(this).children('.depth2').stop().slideDown(200)
            console.log('twst')
        },
        function(){
            $(this).children('.depth2').stop().slideUp(200)
        });
});

$(function(){
    var left = 0;
    var mainVisual = document.querySelector('.banner_image')
    var duration = 3000;
    var num = 0;

    function gow() {
        $(mainVisual).css('marginLeft', left);
        $('.circle > a').removeClass('black')
        $('.circle > a').eq(num).addClass('black')
    }
    function sliderStart(){
        slider = setInterval(function(){
        if(left <= -3840) {left = 0;}
        else{left = left - 1920;}

        if(num >= 2) {num = 0;}
        else{num = num + 1;}
        console.log(num)

        gow();
        }, duration);
    }

    function sliderStop() {
        clearInterval(slider);
        console.log('stop');
    }

    sliderStart();

    $('.banner_image, .side_btn').hover(
        function(){
        sliderStop();
        },
        function(){
        sliderStart();
        }
    )

    $('.side_btn > a').eq(0).click(function(){
        if(left < 0) {left = left + 1920;}
        else{left = -3840;}

        if(num > 0) {num = num - 1;}
        else{num = 2;}
        console.log(left);
        console.log(num);
        gow();
    })
    $('.side_btn > a').eq(1).click(function(){
        if(left > -3840) {left = left - 1920;}
        else{left = 0;}

        if(num < 2) {num = num + 1;}
        else{num = 0;}
        console.log(left);
        console.log(num);
        gow();
    })
    
});

$(function(){
    var  rat= 0;
    
    $('.choise_btn > a').eq(0).click(function(){
        if(rat < 0) {rat = rat + 406.5;}
        else{rat = -1219.5;}

        $('.cakec').css('marginLeft', rat);
        console.log(rat)
        return false; //기본 이벤트 x
    })

    $('.choise_btn > a').eq(1).click(function(){
        if(rat > -1209) {rat = rat - 406.5;}
        else{rat = 0;}

        $('.cakec').css('marginLeft', rat);
        console.log(rat)
        return false;
    })
})



