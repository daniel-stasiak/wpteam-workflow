$(function() {

    $(document).ready(function() {


        /* ~~~~~~~~~~ Animsition ~~~~~~~~~~ */

        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'animsition-loading',
            loadingInner: '',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'html',
            transition: function(url){ window.location.href = url; }
        });


        /* ~~~~~~~~~~ Match height ~~~~~~~~~~ */

        $('.match-height').matchHeight({
            byRow: true,
            property: 'min-height',
            target: null,
            remove: false
        });


        /* ~~~~~~~~~~ Set animation scroll when URL is with #anchor ~~~~~~~~~~ */

        if ( window.location.hash ) scroll(0,0);
        setTimeout( function() { scroll(0,0); }, 1);

        $('.scroll').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top + 'px'
            }, 1000, 'swing');
        });

        if(window.location.hash) {
            $('html, body').animate({
                scrollTop: ($(window.location.hash).offset().top - 50) + 'px'
            }, 1000, 'swing');
        }


        /* ~~~~~~~~~~ Return to top button ~~~~~~~~~~ */

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('#return-to-top').addClass('isVisible');
            } else {
                $('#return-to-top').removeClass('isVisible');
            }
        });

        $('#return-to-top').click(function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
        });


        /* ~~~~~~~~~~ Smooth scroll ~~~~~~~~~~ */

        $(document).on('click', 'a.page-scroll', function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });


        /* ~~~~~~~~~~ Mobile navigation ~~~~~~~~~~ */

        var $lateral_menu_trigger = $('.menu-trigger'),
            $content_wrapper = $('.main-content'),
            $navigation = $('header');

        $lateral_menu_trigger.on('click', function(event){
            event.preventDefault();

            $lateral_menu_trigger.toggleClass('is-clicked');
            $navigation.toggleClass('lateral-menu-is-open');

            $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    $('body').toggleClass('overflow-hidden');
                });

            $('#lateral-nav').toggleClass('lateral-menu-is-open');
        });

        $content_wrapper.on('click', function(event){
            if( !$(event.target).is('.menu-trigger, .menu-trigger span') ) {
                $lateral_menu_trigger.removeClass('is-clicked');
                $navigation.removeClass('lateral-menu-is-open');

                $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    $('body').removeClass('overflow-hidden');
                });

                $('#lateral-nav').removeClass('lateral-menu-is-open');
            }
        });

        $('.menu-item-has-children').children('a').on('click', function(event){
            event.preventDefault();
            $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.menu-item-has-children').siblings('.menu-item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
        });

    });


    /* ~~~~~~~~~~ WOW Initial ~~~~~~~~~~ */

    new WOW().init();

});