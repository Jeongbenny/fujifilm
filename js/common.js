let num=0;
$('.menu .list > div').on('click',function(){
    $('.menu .list > div').eq(num).find('ul').slideUp();
    if($(this).find('ul').css('display')!='block'){
        $(this).find('ul').slideToggle();
    }
    num=$(this).index()
})

let num1=0;
$('.header .menu-trigger').on('click',function(){

    $('.menu').toggleClass('active');
    $('.menu-trigger').toggleClass('active');
})

let num2=0;
$(window).on('scroll',function(){
    $('main .a').each(function(i){
        let conTop = $('main .a').eq(i).offset().top;
        let winHei = $(window).height();

        if($(window).scrollTop() > conTop - winHei){
            $('main .a').eq(i).addClass('active');
        }

    });
});

let num3=0;
//open
$('.header .search').on('click',function(){    
    $('header .search_menu').addClass('active');
    $('header .menu_close').addClass('active');
});
//close
$('header .menu_close').on('click',function(){
    $('header .search_menu').removeClass('active');
    $('header .menu_close').removeClass('active');
});

let num4=0;
$('footer .foot').fadeOut('',function(){
    $('.foot').fadeIn('')
});


var swiper = new Swiper(".bg", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});