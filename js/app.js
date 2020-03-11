/* Theme Name: Zoovara - Personal Template
   Author: Mannat-themes
   Version: 1.0.0
   File Description:App JS file of the template
*/

!function ($) {
    "use strict";
    var MainApp = function () { };

    //===== ripples =====

    MainApp.prototype.initprofileRipple = function () {

        $('#profile_ripple').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });
    },
        //=====Filter=====
        MainApp.prototype.initFilter = function () {
            $(window).on('load', function () {
                //PORTFOLIO FILTER 
                var $container = $('.projects-wrapper');
                var $filter = $('#filter');
                // Initialize isotope 
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
                // Filter items when filter link is clicked
                $filter.find('a').click(function () {
                    var selector = $(this).attr('data-filter');
                    $filter.find('a').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
                /*END*/
            });
        },

        //===== magnific Popup =====

        MainApp.prototype.initmagnificPopup = function () {
            $('.mfp-image').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                    // Will preload 0 - before current, and 1 after the current image 
                }
            });
        },

        //===== magnific Popup =====
        MainApp.prototype.initPrint = function () {
            $('#lnkPrint').click(function () {

                window.print();
            });
        },

        //===== contact =====
        MainApp.prototype.initContact = function () {
            $('#contact-form').submit(function () {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function () {
                    $('#message').hide();

                    $('#submit')
                        .before('')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                        function (data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('#cform img.contact-loader').fadeOut('slow', function () {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                            if (data.match('success') != null) $('#cform').slideUp('slow');
                        }
                    );
                });
                return false;
            });
        },

        MainApp.prototype.init = function () {
            this.initprofileRipple();
            this.initFilter();
            this.initmagnificPopup();
            this.initPrint();
            this.initContact();
        },
        //init
        $.MainApp = new MainApp, $.MainApp.Constructor = MainApp
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.MainApp.init();
    }(window.jQuery);

