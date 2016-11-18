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


        /* ~~~~~~~~~~ Animsition link for WP navigation ~~~~~~~~~~ */

        $('ul [id*="menu-item-"] a').addClass('animsition-link');


        /* ~~~~~~~~~~ Match height ~~~~~~~~~~ */

        $('.match-height').matchHeight({
            byRow: true,
            property: 'min-height',
            target: null,
            remove: false
        });


        /* ~~~~~~~~~~ Modal fix ~~~~~~~~~~ */

        $('.modal').appendTo("body");


        /* ~~~~~~~~~~ Select2 ~~~~~~~~~~ */

        $('select').select2();


        /* ~~~~~~~~~~ Set animation scroll when URL is with #anchor and make smooth scroll ~~~~~~~~~~ */

        if ( window.location.hash ) scroll(0,0);
        setTimeout( function() { scroll(0,0); }, 1);

        $('.scroll').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ($($(this).attr('href')).offset().top - $('.main-header').height()) + 'px'
            }, 1000, 'swing');
        });

        if(window.location.hash) {
            $('html, body').animate({
                scrollTop: ($(window.location.hash).offset().top - $('.main-header').height()) + 'px'
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


        /* ~~~~~~~~~~ First content element fix ~~~~~~~~~~ */

        $('.content').prepend('<span class="first-element-fix"></span>');


        /* ~~~~~~~~~~ Mobile navigation ~~~~~~~~~~ */

        var $menu = $("#mobile-navigation").mmenu({
            "extensions": [
                "pagedim-black",
                "theme-dark"
            ],
            "offCanvas": {
                "position": "right"
            },
            "navbars": [
                {
                    "position": "top"
                }
           ]
        });

        var $icon = $("#mmenu-triger");
        var API = $menu.data( "mmenu" );

        $icon.on( "click", function() {
           API.open();
        });

        API.bind( "opened", function() {
           setTimeout(function() {
              $icon.addClass( "is-active" );
           }, 10);
        });
        API.bind( "closed", function() {
           setTimeout(function() {
              $icon.removeClass( "is-active" );
           }, 10);
        });

        $('#mobile-navigation .navigation li a').addClass('mm-fullsubopen');


        /* ~~~~~~~~~~ Custom pagination link class fix ~~~~~~~~~~ */

        // $('.pagination .page-item a, .pagination .page-item span').addClass('page-link');

    });


    /* ~~~~~~~~~~ WOW Initial ~~~~~~~~~~ */

    new WOW().init();

});