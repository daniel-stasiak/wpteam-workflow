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
			// 'main_navigation' => 'Main navigation'
		)
	);
}


/* ~~~~~~~~~~ Set one jquery version for all of plugins ~~~~~~~~~~ */

if( !is_admin()){
	wp_deregister_script('jquery');
	wp_register_script('jquery', ("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"), false, '1.9.1');
	wp_enqueue_script('jquery');
}


/* ~~~~~~~~~~ Specific image dimensions ~~~~~~~~~~ */

// add_image_size( 'image-type-title', 'X', 'X', true);


/* ~~~~~~~~~~ Let Wordpress use SVG files ~~~~~~~~~~ */

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


/* ~~~~~~~~~~ Protection for e-mail addresses in html ~~~~~~~~~~ */

//add_filter('acf/load_value', 'eae_encode_emails');


/* ~~~~~~~~~~ OG Image fix ~~~~~~~~~~ */

add_filter('wpseo_pre_analysis_post_content', 'mysite_opengraph_content');
function mysite_opengraph_content($val) {
	return preg_replace("/<img[^>]+>/i", "", $val);
}


/* ~~~~~~~~~~ Add featured image to page ~~~~~~~~~~ */

add_theme_support( 'post-thumbnails', array( 'post', 'page' ) );


/* ~~~~~~~~~~ Add BS4 Navwalker ~~~~~~~~~~ */

require_once('bs4navwalker.php');


/* ~~~~~~~~~~ ACF Google Maps API Key ~~~~~~~~~~ */

// function my_acf_init() {

//     acf_update_setting('google_api_key', 'XXXXXXXXXXXXXXXXXXXX');
// }

// add_action('acf/init', 'my_acf_init');



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~ Custom function ~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    /* ~~~~~~~~~~ Show the slug functions ~~~~~~~~~~ */

    function the_slug($echo=true){
    	$slug = basename(get_permalink());
        do_action('before_slug', $slug);
        $slug = apply_filters('slug_filter', $slug);
        if( $echo ) echo $slug;
        do_action('after_slug', $slug);
        return $slug;
    }


    /* ~~~~~~~~~~ Get the slug function ~~~~~~~~~~ */

    function get_the_slug() {
        global $post;

        if ( is_single() || is_page() ) {
            return $post->post_name;
        } else {
            return "";
        }
    }


    /* ~~~~~~~~~~ Custom pagination ~~~~~~~~~~ */

    function custom_pagination() {
        global $wp_query;
        $big = 999999999; // need an unlikely integer
        $pages = paginate_links(
            array(
                'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                'format' => '?paged=%#%',
                'current' => max( 1, get_query_var('paged') ),
                'total' => $wp_query->max_num_pages,
                'prev_next' => false,
                'type'  => 'array',
                'prev_next'   => TRUE,
                'prev_text'    => __('&laquo;'),
                'next_text'    => __('&raquo;'),
            )
        );

        if( is_array( $pages ) ) {
            $paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
            echo '<nav aria-label="Page navigation">
                    <ul class="pagination">';
            foreach ( $pages as $page ) {
                echo "<li class=\"page-item\">$page</li>";
            }
            echo '</ul>
            </nav>';
        }
    }


    /* ~~~~~~~~~~ Author full name ~~~~~~~~~~ */

    function author_full_name() {
        global $post;
        $fname = get_the_author_meta('first_name');
        $lname = get_the_author_meta('last_name');
        $full_name = '';

        if( empty($fname)){
            return $lname;
        } elseif( empty( $lname )){
            return $fname;
        } else {
            return "{$fname} {$lname}";
        }
    }

?>
