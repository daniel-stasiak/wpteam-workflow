
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

        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-XXXXXXXX-X', 'auto');
            ga('send', 'pageview');
        </script>
    </body>
</html>
