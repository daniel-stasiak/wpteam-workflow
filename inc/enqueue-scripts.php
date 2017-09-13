<?php

/* ~~~~~~~~~~ Enqueue all styles and scripts ~~~~~~~~~~ */

/**
* Learn more about enqueue_script: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_script}
* Learn more about enqueue_style: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_style }
*/

if ( ! function_exists( 'wpteam_scripts' ) ) :
    function wpteam_scripts() {
        wp_enqueue_style( 'main-stylesheet', get_template_directory_uri() . '/styles/style.css', array(), '1.0.0', 'all' );

        $in_footer = apply_filters('wpteam_load_jquery_in_footer', true);
        wp_deregister_script( 'jquery' );
        wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js', array(), '2.1.0', $in_footer );

        wp_enqueue_script( 'main-scripts', get_template_directory_uri() . '/scripts/scripts.js', array('jquery'), '1.0.0', true );
    }

    add_action( 'wp_enqueue_scripts', 'wpteam_scripts' );
endif;


/* ~~~~~~~~~~ Choose where to place jQuery ~~~~~~~~~~ */

add_filter('wpteam_load_jquery_in_footer',
function($in_footer) {
    if (is_page_template( 'page-templates/page-contact-bak.php' )) {
        $in_footer = false;
    }

    return $in_footer;
});


/* ~~~~~~~~~~ Getting script tags ~~~~~~~~~~ */

/**
* Learn more: http://wordpress.stackexchange.com/questions/54064/how-do-i-get-the-handle-for-all-enqueued-scripts
*/

// add_action( 'wp_print_scripts', 'wsds_detect_enqueued_scripts' );
// function wsds_detect_enqueued_scripts() {
//     global $wp_scripts;
//     foreach( $wp_scripts->queue as $handle ) :
//         echo $handle . ' | ';
//     endforeach;
// }


/* ~~~~~~~~~~ Add Defer loading to Plugins ~~~~~~~~~~ */

/**
* Learn more: https://wpshout.com/make-site-faster-async-deferred-javascript-introducing-script_loader_tag/
*/

// add_filter( 'script_loader_tag', 'wsds_defer_scripts', 10, 3 );
// function wsds_defer_scripts( $tag, $handle, $src ) {

//     $defer_scripts = array(
//         'thrive-compat-jquery',
//         'monsterinsights-lite-frontend-script',
//         'jquery',
//         'tp-tools',
//         'revmin',
//         'wc-add-to-cart',
//         'woocommerce',
//         'wc-cart-fragments',
//         'swatches-and-photos',
//         'main-scripts',
//         'tve-dash-frontend'
//     );

//     if ( in_array( $handle, $defer_scripts ) ) {
//         return '<script src="' . $src . '" defer="defer" type="text/javascript"></script>' . "\n";
//     }

//     return $tag;
// }

?>
