var posNav = $('.wrap-main-nav').offset().top;
var menuDesktop = $('.container-main-nav');
var mainNav = $('.main-nav');
var lastScrollTop = 0;
var st = 0;

$(window).on('scroll',function(){
    fixedHeader();     
});

$(window).on('resize',function(){ 
    fixedHeader();
});

$(window).on('load',function(){ 
    fixedHeader();
});

var fixedHeader = function() {
    st = $(window).scrollTop();

    if(st > posNav + mainNav.outerHeight()) {
        $(menuDesktop).addClass('fixed-menu-desktop');
    } 
    else if(st <= posNav) {
        $(menuDesktop).removeClass('fixed-menu-desktop');
    }   

    if (st < lastScrollTop && st < 125){
        $(mainNav).removeClass('show-main-nav');
    } 
    else {
        $(mainNav).addClass('show-main-nav');
    }

    lastScrollTop = st;
};        