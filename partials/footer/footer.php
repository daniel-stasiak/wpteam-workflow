        </div><!-- /.main-content -->

        <nav id="lateral-nav" class="menu-mobile-container">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo animsition-link"><img src="<?php echo get_template_directory_uri(); ?>/images/logo__tts-inspire.svg" alt="TTS Inspire"></a>
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