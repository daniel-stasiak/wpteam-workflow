			<?php get_template_part('partials/footer/main-footer'); ?>

		</div><!-- /.main-content -->

        <nav id="mobile-navigation">
            <!--<a href="<?php //echo esc_url( home_url( '/' ) ); ?>" class="logo animsition-link">
                <?php //echo file_get_contents(get_template_directory_uri().'/images/logo__silverless.svg'); ?>
            </a>-->
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
        </nav><!-- /#mobile-navigation -->

		<?php get_template_part('partials/footer/scripts'); ?>

 	</body>
</html>