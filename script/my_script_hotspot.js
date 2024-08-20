(function($){
    //제품>edgefarm
    const hotspot_pc = $('.hotspot_pc .e-hotspot');
    const hotspot_text_pc = $('.hotspot_pc .hotspot_text > div');
    for (let i = 0; i < hotspot_pc.length; i++){
        hotspot_pc.eq(0).addClass('on');
        hotspot_text_pc.eq(0).addClass('on');

        hotspot_pc.eq(i).hover(function(){
            hotspot_pc.removeClass('on');
            hotspot_pc.eq(i).addClass('on');

            hotspot_text_pc.removeClass('on');
            hotspot_text_pc.eq(i).addClass('on');
        });

        hotspot_text_pc.eq(i).hover(function(){
            hotspot_pc.removeClass('on');
            hotspot_pc.eq(i).addClass('on');

            hotspot_text_pc.removeClass('on');
            hotspot_text_pc.eq(i).addClass('on');
        });
    }
    const hotspot_mb = $('.hotspot_mb .e-hotspot');
    const hotspot_text_mb = $('.hotspot_mb .hotspot_text > div');
    const hotspot_img_mb = $('.hotspot_mb .hotspot_img > div');
    for (let i = 0; i < hotspot_mb.length; i++){
        hotspot_mb.eq(0).addClass('on');
        hotspot_text_mb.eq(0).addClass('on');
        hotspot_img_mb.eq(0).addClass('on');

        hotspot_mb.eq(i).click(function(){
            hotspot_mb.removeClass('on');
            hotspot_mb.eq(i).addClass('on');

            hotspot_text_mb.removeClass('on');
            hotspot_text_mb.eq(i).addClass('on');

            hotspot_img_mb.removeClass('on');
            hotspot_img_mb.eq(i).addClass('on');
        });

        hotspot_text_mb.eq(i).click(function(){
            hotspot_mb.removeClass('on');
            hotspot_mb.eq(i).addClass('on');

            hotspot_text_mb.removeClass('on');
            hotspot_text_mb.eq(i).addClass('on');

            hotspot_img_mb.removeClass('on');
            hotspot_img_mb.eq(i).addClass('on');
        });
    }
    //제품>edgefarm end
})(jQuery);