<nav id="mobile-navigation">
    <?php
        wp_nav_menu(
            array(
                'container' => false,
                'menu_id' => false,
                'menu_class' => 'navigation single-item-wrapper reset-list',
                'menu' => 'Main navigation',
                'theme_location'  => 'main_navigation'
            )
        );
    ?>
</nav><!-- /#mobile-navigation -->