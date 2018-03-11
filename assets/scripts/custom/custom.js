(function($){

    $(document).ready(function() {

        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
        /* ~~~~~~~~~~ Plugin Inits ~~~~~~~~~~ */
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

            /* ~~~~~~~~~~ Match height ~~~~~~~~~~ */

            $('.match-height').matchHeight({
                byRow: true,
                property: 'min-height',
                target: null,
                remove: false
            });


            /* ~~~~~~~~~~ Mobile navigation ~~~~~~~~~~ */

            $('.main-header').addClass('mmenu-fixed');

            if($('#wpadminbar').length) {
                $('#wpadminbar').addClass('mmenu-fixed');
            }

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
                        fixed: "mmenu-fixed",
                        elemInsertSelector: '.main-content'
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


            /* ~~~~~~~~~~ Lazy Loading ~~~~~~~~~~ */

            $('.lazy').Lazy({
                effect: 'fadeIn'
            });


            /* ~~~~~~~~~~ Fancybox Init ~~~~~~~~~~ */

            $(".content a[href*='.jpg'], .content a[href*='.jpeg'], .content a[href*='.png']").fancybox();


            /* ~~~~~~~~~~ Web Font Loader ~~~~~~~~~~ */

            // WebFontConfig = {
            //     google: {
            //         families: ['Roboto:300,300i,400,400i,500,500i,700,700i']
            //     },
            //     typekit: {
            //         id: 'cgy8byz'
            //     }
            // };


            /* ~~~~~~~~~~ OWL Init ~~~~~~~~~~ */

                /* ~~~~~ Slider Name ~~~~~ */

                // $(function() {
                //     var owlsampleSlider = $('#sample-slider');

                //     owlsampleSlider.owlCarousel({
                //         items: 3,
                //         dots: false,
                //         loop: true,
                //         responsive : {
                //             0 : {
                //                 margin: 20
                //             },
                //             1200 : {
                //                 items: 4,
                //                 margin: 30
                //             }
                //         }
                //     });

                //     $('#prev-sample-slider').click(function(e) {
                //         e.preventDefault();

                //         owlsampleSlider.trigger('prev.owl.carousel');
                //     });

                //     $('#next-sample-slider').click(function(e) {
                //         e.preventDefault();

                //         owlsampleSlider.trigger('next.owl.carousel');
                //     });
                // });


        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
        /* ~~~~~~~~~~ Functions ~~~~~~~~~~ */
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

            /* ~~~~~~~~~~ Modal fix ~~~~~~~~~~ */

            $('.modal').insertAfter($('body'));


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
            $('blockquote').prepend('<span class="first-element-fix"></span>');
            $('.panel').prepend('<span class="first-element-fix"></span>');


            /* ~~~~~~~~~~ Mobile navigation ~~~~~~~~~~ */

            $('#mobile-navigation .navigation li a').addClass('mm-fullsubopen');


            /* ~~~~~~~~~~ Make dropdowns visible on hover ~~~~~~~~~~ */

            $('ul.navbar-nav li.dropdown').hover(function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
            }, function() {
                $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
            });


            /* ~~~~~~~~~~ Delete empty <p> elements ~~~~~~~~~~~ */

            $('p').each(function() {
                var $this = $(this);
                if($this.html().replace(/\s|&nbsp;/g, '').length === 0)
                    $this.remove();
            });


            /* ~~~~~~~~~~ Change navigation after scroll ~~~~~~~~~~ */

            $(window).scroll(function() {
                if ($(this).scrollTop() >= 100) {
                    $('.main-header').addClass('main-header--scrolled');
                } else {
                    $('.main-header').removeClass('main-header--scrolled');
                }
            });


            /* ~~~~~~~~~~ Replace all SVG images with inline SVG ~~~~~~~~~~ */

            jQuery('img.svg').each(function(){
                var $img = jQuery(this);
                var imgID = $img.attr('id');
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');

                jQuery.get(imgURL, function(data) {
                    var $svg = jQuery(data).find('svg');

                    if(typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }

                    if(typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass+' replaced-svg');
                    }

                    $svg = $svg.removeAttr('xmlns:a');
                    $img.replaceWith($svg);
                }, 'xml');
            });

    });


    $(window).bind('load resize orientationChange', function () {

        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
        /* ~~~~~~~~~~ Functions ~~~~~~~~~~ */
        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

            /* ~~~~~~~~~~ AOS Refresh ~~~~~~~~~~ */

            // AOS.refresh();


            /* ~~~~~~~~~~ Bootstrap modal margin top if WP admin exist ~~~~~~~~~~ */

            if($('#wpadminbar').length) {
                $('.modal').on('shown.bs.modal', function (e) {
                    var WPAdminBarHeight = $('#wpadminbar').height();
                    $('.modal').css("margin-top", (WPAdminBarHeight + 30));
                });
            }


            /* ~~~~~~~~~~ Sticky Footer ~~~~~~~~~~ */

            // $(function(){
            //     var $footer = $('.footer-wrapper');

            //     var pos = $footer.position(),
            //         height = ($(window).outerHeight() - pos.top) - ($footer.outerHeight() + 2);

            //     if (height > 0) {
            //         $footer.css('margin-top', height);
            //     }
            // });
    });


    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~ Resuable functions ~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

        /* ~~~~~~~~~~ Check if current devices is mobile ~~~~~~~~~~ */

        function isMobile() {
            try{ document.createEvent("TouchEvent"); return true; }
            catch(e){ return false; }
        }


        /* ~~~~~~~~~~ Async loading for typekit ~~~~~~~~~~ */

        // (function(d) {
        //     var wf = d.createElement('script'), s = d.scripts[0];
        //     wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
        //     wf.async = true;
        //     s.parentNode.insertBefore(wf, s);
        // })(document);

})(jQuery);