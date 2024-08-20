(function($){
    if($(window).width() < 1025) {
        // window 크기가 768보다 작을때
        $('.year h1').contents().unwrap().wrap( '<h2></h2>' );
        $('.typing').addClass( 'top' );
    }
})(jQuery);