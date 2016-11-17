<?php get_template_part('partials/header/header'); ?>

    <div class="main-content">

        <header class="main-header">
            <nav class="navbar navbar-light bg-faded">
                <h2 class="hide">Main navigation</h2>

                <?php if ( is_admin_bar_showing() ) echo '<div class="adminbar-fix"></div>'; ?>

                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <ul class="flexbox flexbox--space-between">
                                <li>
                                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navbar-brand animsition-link">
                                        <?php //echo file_get_contents(get_template_directory_uri().'/images/logo__XXX.svg'); ?>
                                    </a>
                                </li>
                                <li>
                                    <?php
                                        // wp_nav_menu([
                                        //     'menu'            => 'Main - navigation',
                                        //     'theme_location'  => 'main_navigation',
                                        //     'container'       => false,
                                        //     'menu_id'         => false,
                                        //     'menu_class'      => 'nav navbar-nav',
                                        //     'depth'           => 2,
                                        //     'fallback_cb'     => 'bs4navwalker::fallback',
                                        //     'walker'          => new bs4navwalker()
                                        // ]);
                                    ?>
                                    <button id="mmenu-triger" class="hamburger hamburger--squeeze" type="button" aria-label="Menu">
                                        <span class="hamburger-box">
                                            <span class="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </li>
                            </ul><!-- /.flexbox flexbox--space-between -->
                        </div><!-- /.col-xs-12 -->
                    </div><!-- /.row -->
                </div><!-- /.container -->
            </nav><!-- /.navbar navbar-light bg-faded -->
        </header><!-- /.main-header -->