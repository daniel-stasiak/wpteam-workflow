<nav class="navbar">
    <h2 class="hide">Main navigation</h2>
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col col-auto">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navbar-brand">
                    <!-- <img src="<?php //echo get_template_directory_uri(); ?>/images/logo__XXX.svg" alt="<?php //echo get_bloginfo('name'); ?>" class="navbar-brand__logo" /> -->
                </a>
            </div><!-- /.col col-auto -->
            <div class="col col-auto">
                <?php
                    wp_nav_menu([
                        'menu'            => 'Main Navigation',
                        'theme_location'  => 'main_navigation',
                        'container'       => false,
                        'menu_id'         => false,
                        'menu_class'      => 'navbar-nav mr-auto',
                        'depth'           => 2,
                        'fallback_cb'     => 'bs4navwalker::fallback',
                        'walker'          => new bs4navwalker()
                    ]);
                ?>
                <button id="mmenu-triger" class="hamburger hamburger--squeeze" type="button" aria-label="Menu">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div><!-- /.col col-auto -->
        </div><!-- /.row align-items-center justify-content-between -->
    </div><!-- /.container -->
</nav><!-- /.navbar -->