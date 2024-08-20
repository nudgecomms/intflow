(function($){
    // main
    $(window).scroll( function(){
        $('.slide_in_img').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
            // 여기부터 적용시킬 코드 삽입
            $(this).addClass('slide_in');
            }          
        });
    });
    // main end
})(jQuery);