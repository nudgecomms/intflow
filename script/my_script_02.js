(function($){
    //●footer●
    $(window).scroll( function(){
        $('.main02_footer').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
                // 여기부터 적용시킬 코드 삽입
                $('.main02_footer #contact_btn').addClass('fixed');
            }else{
                $('.main02_footer #contact_btn').removeClass('fixed');
            }  
        }); 
    });
    //●footer end●
    $('.main02_btn > .elementor-widget-container > .elementor-button-wrapper > #main02_btn .elementor-button-icon svg').clone().appendTo('#main02_btn .elementor-button-icon');
})(jQuery);