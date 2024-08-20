(function($){
    //●footer●
    const floatingBtn = $('.floating');
    const toTop = $('.to_top, .loop__to_top');

    //---to top---
    toTop.click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 300);
        return false;
    });
    //---to top end---

    // ---floating btn---
    $(window).scroll(function(){
        const imgTop=$(window).scrollTop();
        // console.log(imgTop);
    
        if (imgTop < 200){
            floatingBtn.css({'opacity':'0' , 'transition':'.3s'});
        }
        if (imgTop > 201){
            floatingBtn.css({'opacity':'1'});
        }
    });
    //---floating btn end---
    //●footer end●

    // --(개인정보처리방침/입금안내)창닫기버튼--
    $('#close_window').click(function(){
        window.open('','_self').close();
    });
    // --(개인정보처리방침/입금안내)창닫기 버튼 end--
    
    $(window).scroll( function(){
        $('.divider').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass('line_slide');
            }          
        }); 
        $('.typing:not(.typing.top)').each(function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass("on");
            }
        });
    });
})(jQuery);