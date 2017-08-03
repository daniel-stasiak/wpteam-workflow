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


/* ~~~~~~~~~~ Widget areas ~~~~~~~~~~ */

// if ( ! function_exists( 'wpteam_sidebar_widgets' ) ) :
// 	function wpteam_sidebar_widgets() {
// 		register_sidebar(array(
// 	  		'id' => 'sidebar-widgets',
// 	  		'name' => __( 'Sidebar widgets', 'wpteam' ),
// 	  		'description' => __( 'Drag widgets to this sidebar container.', 'wpteam' ),
// 	  		'before_widget' => '<div class="col-md-3"><section id="%1$s" class="widget %2$s">',
// 	  		'after_widget' => '</section></div>',
// 	  		'before_title' => '<h3 class="widget__title">',
// 	  		'after_title' => '</h3>',
// 		));

// 		register_sidebar(array(
// 	  		'id' => 'footer-widgets',
// 	  		'name' => __( 'Footer widgets', 'wpteam' ),
// 	  		'description' => __( 'Drag widgets to this footer container', 'wpteam' ),
// 	  		'before_widget' => '<div class="col-md-3"><section id="%1$s" class="widget %2$s">',
// 	  		'after_widget' => '</section></div>',
// 	  		'before_title' => '<h3 class="widget__title">',
// 	  		'after_title' => '</h3>',
// 		));
// 	}
// 	add_action( 'widgets_init', 'wpteam_sidebar_widgets' );
// endif;


/* ~~~~~~~~~~ MCE Add Button (Shortcodes) ~~~~~~~~~~ */

// if ( ! function_exists( 'wpteam_add_mce_button' ) ) {

// 	/**
// 	 * Hooks your functions into the correct filters
// 	 * @return array
// 	 */

// 	function wpteam_add_mce_button() {
// 		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
// 			return;
// 		}
// 		if ( 'true' === get_user_option( 'rich_editing' ) ) {
// 			add_filter( 'mce_external_plugins', 'wpteam_add_tinymce_plugin' );
// 			add_filter( 'mce_buttons', 'wpteam_register_mce_button' );
// 		}
// 	}

// 	add_action( 'admin_head', 'wpteam_add_mce_button' );
// }

// if ( ! function_exists( 'wpteam_add_tinymce_plugin' ) ) {
// 	/**
// 	 * Register new button in the editor
// 	 * @return array
// 	 */

// 	function wpteam_add_tinymce_plugin( $plugin_array ) {
// 		$plugin_array['wpteam_mce_button'] = get_template_directory_uri() . '/assets/scripts/core/mce-button.js';

// 		return $plugin_array;
// 	}
// }

// if ( ! function_exists( 'wpteam_register_mce_button' ) ) {
// 	/**
// 	 * Register new button in the editor
// 	 * @return array
// 	 */

// 	function wpteam_register_mce_button( $buttons ) {
// 		array_push( $buttons, 'wpteam_mce_button' );

// 		return $buttons;
// 	}
// }


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


/* ~~~~~~~~~~ Check featured image size ~~~~~~~~~~ */

add_action('transition_post_status', 'check_featured_image_size_after_save', 10, 3);

function check_featured_image_size_after_save($new_status, $old_status, $post){
    $run_on_statuses = array('publish', 'pending', 'future');

    if(!in_array($new_status, $run_on_statuses)) return;

    $post_id = $post->ID;

    if ( wp_is_post_revision( $post_id ) ) return; //not sure about this.. but apparently save is called twice when this happens

    $image_data = wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), "Full" );

    if(!$image_data) return; //separate message if no image at all. (I use a plugin for this)

    $image_width = $image_data[1];
    $image_height = $image_data[2];

    $min_width = 850;
    $min_height = 450;

    if($image_width < $min_width || $image_height < $min_height) {
    // Being safe, honestly $old_status shouldn't be in $run_on_statuses... it wouldn't save the first time!
        $reverted_status = in_array($old_status, $run_on_statuses) ? 'draft' : $old_status;

        wp_update_post(array(
            'ID' => $post_id,
            'post_status' => $reverted_status,
        ));

        $back_link = admin_url("post.php?post=$post_id&action=edit");
        wp_die("Featured Image not large enough, must be at least ${min_width}x$min_height. Reverting status to '$reverted_status'.<br><br><a href='$back_link'>Go Back</a>");
    }
}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Required functions ~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    require_once('inc/enqueue-scripts.php');
    require_once('inc/required-plugins-init.php');
    require_once('inc/bs4navwalker.php');
    require_once('inc/custom-functions.php');
    require_once('inc/shortcodes.php');

?>
