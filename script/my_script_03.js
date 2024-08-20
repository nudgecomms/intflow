(function($){
    // header
    // ---(slide_nav)
    const hamburger_btn = $('.main03_header .nav_container .hamburger_btn');
    const slide_nav = $('.main03_slide_nav');
    const close_btn = $('.main03_slide_nav .close_btn');

    hamburger_btn.click(function(){
        slide_nav.addClass('on');
        $('body').addClass('dialog-prevent-scroll');
    });
    close_btn.click(function(){
        slide_nav.removeClass('on');
        $('body').removeClass('dialog-prevent-scroll');
    });
    // ---(slide_nav end)

    // ---(logo_color)
    /*
    var scroll_event_object = $(".main03_header ");
    var solution_conatiner_04 = $(".main03_cont_03");

    $(window).scroll(function () {
        var scroll_top = $(this).scrollTop();
        var solution_conatiner_04_top = solution_conatiner_04.offset().top;
        var solution_conatiner_04_bottom = solution_conatiner_04_top + solution_conatiner_04.innerHeight();

        if(
            (scroll_top > solution_conatiner_04_top && scroll_top < solution_conatiner_04_bottom)
        ){
            scroll_event_object.addClass("scroll_on");
        }else{
            scroll_event_object.removeClass("scroll_on");
        }
    });
    */
    // ---(logo_color end)
    // header end

    //footer
    // Hide on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $('.contact_btn_wrapper').outerHeight(); // 영향을 받을 요소를 선택

    // 스크롤시에 사용자가 스크롤했다는 것을 알림
    $(window).scroll(function(event){
        didScroll = true;
    });

    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    // 동작을 구현
    function hasScrolled() {
        // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
        var st = $(this).scrollTop();
        
        // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
        if(Math.abs(lastScrollTop - st) <= delta){
            return;
        }
        
        // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.contact_btn_wrapper').removeClass('up').addClass('down');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.contact_btn_wrapper').removeClass('down').addClass('up');
            }
        }
        
        // lastScrollTop 에 현재 스크롤위치를 지정한다.
        lastScrollTop = st;
    }
    //footer end

    $(window).scroll( function(){
        // 적용 시킬 개체의 class명
        $('.divider').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass('line_slide');
            }          
        }); 
        $('.slide_in_img').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
            // 여기부터 적용시킬 코드 삽입
            $(this).addClass('slide_in');
            }          
        }); 

        $('.typing_txt').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass('on');
                var Delay = 100;
                $( '.text-1' ).animate( {
                  opacity: '1'
                }, Delay, function() {
                  $( '.text-2' ).animate( {
                    opacity: '1'
                  }, Delay, function() {
                    $( '.text-3' ).animate( {
                      opacity: '1'
                    }, Delay );
                  });
                });
            }          
        }); 

    });
    // ●divider end●


})(jQuery);