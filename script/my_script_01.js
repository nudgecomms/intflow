(function($){
    $(window).scroll( function(){
        $('.main01_footer').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
                // 여기부터 적용시킬 코드 삽입
                $('.srcoll_bar').css({'opacity':'0','transition':'.5s'});
            }else{
                $('.srcoll_bar').css({'opacity':'1','transition':'.5s'});
            }  
        }); 
    });

    setTimeout(function() {
        scrollTo(0,0);
        });
    $('.page-id-18').css({
        'overflow': 'hidden',
        "touch-action": "none",
        "-ms-touch-action": "none",
    });
    setTimeout(function() {
        $('body').removeAttr('style')           
    }, 2500);
})(jQuery);

