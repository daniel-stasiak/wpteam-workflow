<?php
    /**
    *   Enqueue scripts
    *
    *   @package Crunch
    *   @since Crunch 2.0.0
    */

    /* ~~~~~~~~~~ Enqueue all styles and scripts ~~~~~~~~~~ */

    /**
    * Learn more about enqueue_script: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_script}
    * Learn more about enqueue_style: {@link https://codex.wordpress.org/Function_Reference/wp_enqueue_style }
    */

    if ( ! function_exists( 'crunch_scripts' ) ) :
        function crunch_scripts() {
            $js_version  = date("ymd-Gis", filemtime( plugin_dir_path( __FILE__ ) . '../scripts/scripts.js' ));
            $css_version = date("ymd-Gis", filemtime( plugin_dir_path( __FILE__ ) . '../styles/style.css' ));

            wp_enqueue_style( 'main-stylesheet', get_template_directory_uri() . '/styles/style.css', array(), $css_version, 'all' );

            $in_footer = apply_filters('crunch_load_jquery_in_footer', true);
            wp_deregister_script( 'jquery' );
            wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js', array(), '2.1.0', $in_footer );

            wp_enqueue_script( 'main-scripts', get_template_directory_uri() . '/scripts/scripts.js', array('jquery'), $js_version, true );
        }

        add_action( 'wp_enqueue_scripts', 'crunch_scripts' );
    endif;


    /* ~~~~~~~~~~ Choose where to place jQuery ~~~~~~~~~~ */

    add_filter('crunch_load_jquery_in_footer',
    function($in_footer) {
        if (is_page_template( 'page-templates/page-contact-bak.php' )) {
            $in_footer = false;
        }

        return $in_footer;
    });


    /* ~~~~~~~~~~ Remove “type” attribute from script tags ~~~~~~~~~~ */

    add_filter('script_loader_tag', 'clean_script_tag');

    function clean_script_tag($input) {
        $input = str_replace("type='text/javascript' ", '', $input);
        return str_replace("'", '"', $input);
    }


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
