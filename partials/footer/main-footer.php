<footer class="main-footer">
    <div class="first-stage">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="row">
                        <div class="col-lg-9 col-md-6" data-mh="first-stage-footer-match-height">
                            <ul class="flexbox flexbox--footer-section">
                                <li>
                                    <div class="company-details">
                                        <div class="company-details__logo" data-mh="logo-match-height">
                                            <?php echo file_get_contents(get_template_directory_uri().'/images/logo__silverless.svg'); ?>
                                        </div><!-- /.company-details__logo -->
                                        <address class="company-address">
                                            8a Silverless Street<br>
                                            Marlborough<br>
                                            Wiltshire SN8 1JQ
                                        </address><!-- /.company-address -->
                                        <ul class="company-details__contact">
                                            <li><a href="mailto:niels@silverless.co.uk">niels@silverless.co.uk</a></li>
                                            <li><a href="tel:+44 (0)1672 556 532">+44 (0)1672 556 532</a></li>
                                        </ul><!-- /.company-details__contact -->
                                    </div><!-- /.company-details -->
                                </li>
                                <li>
                                    <div data-mh="logo-match-height"></div>
                                    <?php
                                        wp_nav_menu([
                                            'menu'            => 'footer - navigation',
                                            'theme_location'  => 'footer_navigation',
                                            'container'       => false,
                                            'menu_id'         => false,
                                            'menu_class'      => 'additional-navigation'
                                        ]);
                                    ?>
                                </li>
                            </ul><!-- /.flexbox flexbox--footer-section -->
                        </div><!-- /.col-lg-9 col-md-6 -->
                        <div class="col-lg-3 col-md-6" data-mh="first-stage-footer-match-height">
                            <div class="vertical-center">
                                <?php get_template_part('partials/social-icons'); ?>
                            </div><!-- /.vertical-center -->
                        </div><!-- /.col-lg-3 col-md-6 -->
                    </div><!-- /.row -->
                </div><!-- /.col-lg-10 offset-lg-1 -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div><!-- /.first-stage -->
    <div class="second-stage">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <ul class="flexbox flexbox--wrap">
                        <li>
                            <span class="company-details">Silverless Limited is registered in England & Wales No. 05365386. VAT Registration No. 818 2100 61.</span>
                        </li>
                        <li>
                            <span class="copyrights">© 2016 Silverless Limited. All rights reserved.</span>
                        </li>
                        <li>
                            <a href="#" class="privacy-policy">Privacy Policy</a>
                        </li>
                    </ul><!-- /.flexbox flexbox--wrap -->
                </div><!-- /.col-lg-10 offset-lg-1 -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div><!-- /.second-stage -->
</footer><!-- /.main-footer -->