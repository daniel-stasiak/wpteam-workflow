<?php

/* ~~~~~~~~~~ Add options page to Wordpress with ACF ~~~~~~~~~ */

// if( function_exists('acf_add_options_page') ) {
// 	acf_add_options_page(array(
// 		'page_title' 	=> 'Theme title',
// 		'menu_title'	=> 'Theme title',
// 		'menu_slug' 	=> 'theme-general-settings',
// 		'capability'	=> 'edit_posts',
// 		'redirect'		=> false
// 	));

// 	acf_add_options_sub_page(array(
// 		'page_title' 	=> 'Home',
// 		'menu_title'	=> 'Home',
// 		'parent_slug'	=> 'theme-general-settings',
// 	));
// }


/* ~~~~~~~~~~ Add custom Wordpress navigation ~~~~~~~~~~ */

if(function_exists('register_nav_menus')) {
	register_nav_menus(
		array(
			// 'main_navigation' => 'Main Navigation'
		)
	);
}


/* ~~~~~~~~~~ Set one jquery version for all of plugins ~~~~~~~~~~ */

if( !is_admin()){
	wp_deregister_script('jquery');
	wp_register_script('jquery', ("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"), false, '3.2.1');
	wp_enqueue_script('jquery');
}


/* ~~~~~~~~~~ Specific image dimensions ~~~~~~~~~~ */

// add_image_size( 'image-type-title', 'X', 'X', true);


/* ~~~~~~~~~~ Protection for e-mail addresses in html ~~~~~~~~~~ */

add_filter('acf/load_value', 'eae_encode_emails');


/* ~~~~~~~~~~ OG Image fix ~~~~~~~~~~ */

add_filter('wpseo_pre_analysis_post_content', 'wpteam_opengraph_content');
function wpteam_opengraph_content($val) {
	return preg_replace("/<img[^>]+>/i", "", $val);
}


/* ~~~~~~~~~~ Turning off REST API ~~~~~~~~~~ */

add_filter('rest_authentication_errors', 'disable_rest_api', 99);
function disable_rest_api() {
	return new WP_Error('rest_api_disabled', 'REST API disables', array('status' => 403));
}


/* ~~~~~~~~~~ ACF Google Maps API Key ~~~~~~~~~~ */

// function my_acf_init() {

//     acf_update_setting('google_api_key', 'XXXXXXXXXXXXXXXXXXXX');
// }

// add_action('acf/init', 'my_acf_init');


/* ~~~~~~~~~~ Init Sidebar ~~~~~~~~~~ */

// add_action( 'widgets_init', 'wpteam_widgets_init' );
// function wpteam_widgets_init() {
//     register_sidebar(
//         array(
//             'name' => __( 'Blog', 'wpteam' ),
//             'id' => 'sidebar-blog',
//             'description' => __( 'Widgets in this section are displayed on blog pages.', 'wpteam' ),
//             'before_widget' => '<div id="%1$s" class="widget %2$s">',
//         'after_widget'  => '</div>',
//         'before_title'  => '<h2 class="widget__title">',
//         'after_title'   => '</h2>',
//         )
//     );
// }


/* ~~~~~~~~~~ Removing standard posts from WP Admin ~~~~~~~~~~ */

// add_action( 'admin_menu', 'my_remove_menu_pages' );

// function my_remove_menu_pages() {
//     remove_menu_page('edit.php');
// }


/* ~~~~~~~~~~ Hide ACF ~~~~~~~~~~ */

// add_filter('acf/settings/show_admin', '__return_false');


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Required functions ~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    require_once('inc/required-plugins-init.php');
    require_once('inc/bs4navwalker.php');
    require_once('inc/custom-functions.php');
    require_once('inc/shortcodes.php');

?>
