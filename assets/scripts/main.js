$(function() {

    $(document).ready(function() {


        /* ~~~~~~~~~~ Animsition ~~~~~~~~~~ */

        $(".animsition").animsition({
            inClass: 'overlay-slide-in-top',
            outClass: 'overlay-slide-out-top',
            inDuration: 500,
            outDuration: 250,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'animsition-loading',
            timeout: true,
            timeoutCountdown: 2000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : true,
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

        $('.modal').insertAfter($('body'));


        /* ~~~~~~~~~~ Select2 ~~~~~~~~~~ */

        $('select').select2();


        /* ~~~~~~~~~~ Set animation scroll when URL is with #anchor and make smooth scroll ~~~~~~~~~~ */

        $(function(){
            if ( window.location.hash ) scroll(0,0);
            setTimeout( function() { scroll(0,0); }, 1);

            var headerHeight = $('.main-header').height();

            if($('#wpadminbar').length) {
                headerHeight += $('#wpadminbar').height();
            }

            $('.scroll').on('click', function(e) {
                e.preventDefault();

                $('html, body').animate({
                    scrollTop: ($($(this).attr('href')).offset().top - headerHeight) + 'px'
                }, 1000, 'swing');
            });

            if(window.location.hash) {
                $('html, body').animate({
                    scrollTop: ($(window.location.hash).offset().top - headerHeight) + 'px'
                }, 1000, 'swing');
            }
        });


        /* ~~~~~~~~~~ Return to top button ~~~~~~~~~~ */

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('.return-to-top').addClass('return-to-top--visible');
            } else {
                $('.return-to-top').removeClass('return-to-top--visible');
            }
        });

        $('#return-to-top').click(function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
        });


        /* ~~~~~~~~~~ First content element fix ~~~~~~~~~~ */

        $('.content').prepend('<span class="first-element-fix"></span>');


        /* ~~~~~~~~~~ Add mmenu class to fixed elements ~~~~~~~~~~ */

        $('.main-header').addClass('mmenu-fixed');

        if($('#wpadminbar').length) {
            $('#wpadminbar').addClass('mmenu-fixed');
        }


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
        }, {
            classNames: {
                fixedElements: {
                    fixed: "mmenu-fixed"
                }
            }
        });

        var $icon = $("#mmenu-triger");
        var API = $menu.data( "mmenu" );

        $icon.on( "click", function() {
            if($icon.hasClass('is-active')) {
                API.close();
            } else {
                API.open();
            }
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


        /* ~~~~~~~~~~ Make dropdowns visible on hover ~~~~~~~~~~ */

        $('ul.navbar-nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
        });


        /* ~~~~~~~~~~ AOS Init ~~~~~~~~~~ */

        AOS.init();


        /* ~~~~~~~~~~ Dense (Retina images) init ~~~~~~~~~~ */

        $('img').dense({
            'glue' : '@'
        });


        /* ~~~~~~~~~~ Delete empty <p> elements ~~~~~~~~~~~ */

        $('p').each(function() {
            var $this = $(this);
            if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
                $this.remove();
        });

    });


    $(window).on("load resize",function(){

        /* ~~~~~~~~~~ Main margin top ~~~~~~~~~~ */

        $(function(){
            var marginTop = $('.main-header').height();

            if($('#wpadminbar').length) {
                var WPAdminBarHeight = $('#wpadminbar').height();

                marginTop += WPAdminBarHeight;

                $('.main-header').css("top", WPAdminBarHeight);
            }

            $('main').css('margin-top', marginTop);
        });


        /* ~~~~~~~~~~ Bootstrap modal margin top if WP admin exist ~~~~~~~~~~ */

        if($('#wpadminbar').length) {
            $('.modal').on('shown.bs.modal', function (e) {
                var modalHeight = $(this).find('.modal-content').height();
                var WPAdminBarHeight = $('#wpadminbar').height();

                if(modalHeight >= $(window).height()) {
                    $('.modal .vertical-alignment-helper').css("padding-top", (WPAdminBarHeight + 15));
                } else {
                    $('.modal .vertical-alignment-helper').css("padding-top", 15);
                }
            });
        }

    });


    /* ~~~~~~~~~~ Check if current devices is mobile ~~~~~~~~~~ */

    function isMobile() {
        try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false; }
    }

});