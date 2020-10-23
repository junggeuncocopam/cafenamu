// main js

// 2단계 메뉴 호버 효과
$(function(){
    $('.depth1 > li').hover(
        function(){
            $(this).children('.depth2').stop().slideDown(200);
        }, 
        function(){
            $(this).children('.depth2').stop().slideUp(200);
        });
});


// bx slider
$(document).ready(function(){
    $('#main_visual').imagesLoaded(function() {
    $('.slide').bxSlider({
        mode: 'fade',
        pause: 3000,
        auto: true
    });
    });
});




