			<?php get_template_part('partials/footer/main-footer'); ?>

		</div><!-- /.main-content -->

        <nav id="lateral-nav" class="menu-mobile-container">
           <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo animsition-link">
                <?php //echo file_get_contents(get_template_directory_uri().'/images/logo__silverless.svg'); ?>
            </a>
            <?php
                // wp_nav_menu(
                //     array(
                //         'container' => false,
                //         'menu_id' => false,
                //         'menu_class' => 'navigation single-item-wrapper reset-list',
                //         'menu' => 'Main - navigation'
                //     )
                // );
            ?>
        </nav><!-- /#lateral-nav.menu-mobile-container -->

		<?php get_template_part('partials/footer/scripts'); ?>

 	</body>
</html>