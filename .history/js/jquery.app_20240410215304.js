/* Theme Name:Evaxo - Responsive Multipurpose Blog Page Template
   Author: Zoyothemes
   Version: 1.0.0
   Created:January 2018
   File Description:Main JS file of the template
*/

! function($) {
    "use strict";

    var KobicypherApp = function() {};

    KobicypherApp.prototype.initNavbar = function() {
        var scroll = $(window).scrollTop();

        $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('.navigation-menu>li').slice(-2).addClass('last-elements');

        $('.menu-arrow,.submenu-arrow').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    },

    KobicypherApp.prototype.initNavitemActive = function() {
        $(".navigation-menu a").each(function () {
            if (this.href == window.location.href) {
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
            }
        });
    },

    KobicypherApp.prototype.initPortfolioFilter = function() {
        $(window).on('load', function () {
            var $container = $('.portfolioContainer');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.productCardsFilter a').click(function () {
                $('.productCardsFilter .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        });
    },

    KobicypherApp.prototype.init = function() {
        this.initNavbar();
        this.initNavitemActive();
        this.initPortfolioFilter();
    },
    //init
    $.KobicypherApp = new KobicypherApp, $.KobicypherApp.Constructor = KobicypherApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.KobicypherApp.init();
}(window.jQuery)
