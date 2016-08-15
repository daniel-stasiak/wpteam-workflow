
            <footer class="main-footer">

            </footer><!-- /.main-footer -->

        </div><!-- /.main-content -->

        <?php
            wp_nav_menu(
                array(
                    // 'container' => 'nav',
                    // 'container_id' => 'lateral-nav',
                    // 'container_class' => 'menu-mobile-container',
                    // 'menu_class' => 'navigation single-item-wrapper reset-list',
                    // 'theme_location' => 'main_navigation_mobile'
                )
            );
        ?>

        <script src="<?php echo get_template_directory_uri(); ?>/scripts/scripts.min.js"></script>

        <?php wp_footer(); ?>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
    </body>
</html>
