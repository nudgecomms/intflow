<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
        
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'hello-elementor','hello-elementor','hello-elementor-theme-style' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

// END ENQUEUE PARENT ACTION

//my style 추가
function my_style(){
    wp_register_style('common.min.css', get_stylesheet_directory_uri() . '/css/common.min.css'); 
    wp_enqueue_style('common.min.css');

    wp_register_style('style_header_footer.min.css', get_stylesheet_directory_uri() . '/css/main/style_header_footer.min.css'); 
    wp_enqueue_style('style_header_footer.min.css');
    if(is_page( array(/*(KO)*/5007,/*(EN)*/10531,/*(JP)*/10533) )){        
        wp_register_style('style_main.min.css', get_stylesheet_directory_uri() . '/css/main/style_main.min.css'); 
        wp_enqueue_style('style_main.min.css');
    }
    // (subapge)
    if(is_page( array(/*(KO)*//*자료실*/1740, /*공지사항*/1744, /*최근활동*/1754, /*(EN)*//*자료실*/10595, /*공지사항*/10602, /*최근활동*/10626, /*(JP)*//*자료실*/10597, /*공지사항*/10604, /*최근활동*/10627) )){
        wp_register_style('kboard.min.css', get_stylesheet_directory_uri() . '/css/subpage/kboard.min.css'); 
        wp_enqueue_style('kboard.min.css');
    }
    // 제품
    if(is_page( array(/*(KO)*//*edgefarm*/1722,8833, /*edgeSafe*/1724,/*(EN)*//*edgefarm*/10554, /*edgeSafe*/10556,/*(JP)*//*edgefarm*/10558, /*edgeSafe*/10560))){
        wp_register_style('sub_01_product.min.css', get_stylesheet_directory_uri() . '/css/subpage/sub_01_product.min.css'); 
        wp_enqueue_style('sub_01_product.min.css');
    }
    // 기술
    if(is_page( array(/*(KO)*//*비접촉체중측정*/1728, /*집단행동분석*/1730, /*무제한학슴데이터생성*/1732, /*사물지능화*/1734, /*(EN)*//*비접촉체중측정*/10575, /*집단행동분석*/10579, /*무제한학슴데이터생성*/10583, /*사물지능화*/10587, /*(JP)*//*비접촉체중측정*/10577, /*집단행동분석*/10581, /*무제한학슴데이터생성*/10585, /*사물지능화*/10589 ))){
        wp_register_style('sub_02_skill.min.css', get_stylesheet_directory_uri() . '/css/subpage/sub_02_skill.min.css'); 
        wp_enqueue_style('sub_02_skill.min.css');
    }
    // 자료실
    if(is_page( array(/*(KO)*//*자주묻는질문*/1746,  /*(EN)*//*자주묻는질문*/10606,  /*(JP)*//*자주묻는질문*/10607) )){
        wp_register_style('sub_03_data.min.css', get_stylesheet_directory_uri() . '/css/subpage/sub_03_data.min.css'); 
        wp_enqueue_style('sub_03_data.min.css');
    }
    //회사소개
    if(is_page( array(/*(KO)*//*비전*/1750, /*플랜*/1752, /*커리어*/1753, /*최근활동*/1754, /*(EN)*//*비전*/10614, /*플랜*/10618, /*커리어*/10622, /*최근활동*/10626, /*(JP)*//*비전*/10615, /*플랜*/10619, /*커리어*/10623, /*최근활동*/10627 ))){
        wp_register_style('sub_04_about.min.css', get_stylesheet_directory_uri() . '/css/subpage/sub_04_about.min.css'); 
        wp_enqueue_style('sub_04_about.min.css');
    }
    //서비스신청완료
    if(is_page(array(/*(KO)*/327, /*(EN)*/10634, /*(JP)*/10636))){
        wp_register_style('contact_success.min.css', get_stylesheet_directory_uri() . '/css/subpage/contact_success.min.css'); 
        wp_enqueue_style('contact_success.min.css');
    }
    // (subapge end)
}
add_action( 'wp_enqueue_scripts', 'my_style', 10);
//my style 추가 end

//my scrtip 연결
function my_script() {
    wp_register_script( 'my_script', get_stylesheet_directory_uri() . '/script/my_script.js',  array ('jquery'), '1.0.0', true );
    wp_enqueue_script( 'my_script' ); 
    if(is_page( array(/*(KO)*/5007,/*(EN)*/10531,/*(JP)*/10533) )){
        wp_register_script( 'my_script_main', get_stylesheet_directory_uri() . '/script/my_script_main.js',  array ('jquery'), '1.0.0', true );
        wp_enqueue_script( 'my_script_main' ); 
    }
    // (subpage)
    if(is_page( array(/*(KO)*//*edgefarm*/1722,8833, /*사물지능화*/1734,/*(EN)*//*edgefarm*/10554, /*사물지능화*/10587,/*(JP)*//*edgefarm*/10558, /*사물지능화*/10589) )){
        wp_register_script( 'my_script_hotspot', get_stylesheet_directory_uri() . '/script/my_script_hotspot.js',  array ('jquery'), '1.0.0', true );
        wp_enqueue_script( 'my_script_hotspot' ); 
    }
    if(is_page( array(/*(KO)*//*(플랜)*/1752,/*(최근활동)*/1754, /*(EN)*//*(플랜)*/10618,/*(최근활동)*/10626, /*(JP)*//*(플랜)*/10619,/*(최근활동)*/10627) )){
        wp_register_script( 'my_script_about', get_stylesheet_directory_uri() . '/script/my_script_about.js',  array ('jquery'), '1.0.0', true );
        wp_enqueue_script( 'my_script_about' ); 
    }
    // (subpage end)
} 
add_action( 'wp_enqueue_scripts', 'my_script', 100);
//my scrtip 연결 end

// kboard
// (empty thumnail)
add_filter('kboard_content_get_thumbnail', 'my_kboard_content_get_thumbnail_20191223', 10, 4);
function my_kboard_content_get_thumbnail_20191223($thumbnail_url, $width, $height, $content){
	
	$board = $content->getBoard();
	
	if($board->skin == 'ocean-gallery'){ // 게시판 스킨
		if(!$thumbnail_url){
			$thumbnail_url = '/wp-content/uploads/2024/07/thum_empty.jpg'; // 이미지 주소 편집
		}
	}
	
	return $thumbnail_url;
}
// (empty thumnail end)
// (게시글 클릭시 스크롤위치)
add_filter('kboard_url_board_list', 'kboard_url_board_list_2020_04_03', 10, 2);
function kboard_url_board_list_2020_04_03($url, $board){
	if($board->id == '4'){ // 실제 게시판 id로 적용해주세요.
		$url .= '#kboard-ocean-gallery-list';
	}else if($board->id == '10'){
		$url .= '#kboard-ocean-gallery-list';
	}else if($board->id == '11'){
		$url .= '#kboard-ocean-gallery-list';
	}
	return $url;
}
add_filter('kboard_url_document_uid', 'my_kboard_url_document_uid', 10, 3);
function my_kboard_url_document_uid($url, $content_uid, $board){
	if($board->id =='4'){
		return $url . '#kboard-document';
	}else if($board->id =='10'){
		return $url . '#kboard-document';
	}else if($board->id =='11'){
		return $url . '#kboard-document';
	}
	return $url;
}
add_filter('kboard_url_content_editor', 'kboard_url_content_editor_2020_04_29', 10, 3);
function kboard_url_content_editor_2020_04_29($url, $content_uid, $board){
	if($board->id == '4'){ // 실제 게시판 id로 적용해주세요.
		$url .= '#kboard-ocean-gallery-editor';
	}else if($board->id == '10'){
		$url .= '#kboard-ocean-gallery-editor';
	}else if($board->id == '11'){
		$url .= '#kboard-ocean-gallery-editor';
	}
	
	return $url;
}
// (게시글 클릭시 스크롤위치 end)
// kboard end