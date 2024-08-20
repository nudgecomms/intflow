(function($){
    const nav_slide = $('body.page');
    $('.slide_icon').click(function(){
        nav_slide.toggleClass('nav_slide_on');
    });
    $('.hamburger_btn').click(function(){
        nav_slide.toggleClass('nav_slide_on');
        $('body').toggleClass('dialog-prevent-scroll');
    });
})(jQuery);