! function ($) {
    "use strict";

    let KobicypherApp = function () {};

    KobicypherApp.prototype.initNavbar = function () {

        $(".navbar-toggle").on('click', function () {
            $(this).toggleClass("open");
            $("#navigation").slideToggle(400);
        });

        $(".navigation-menu>li").slice(-2).addClass("last-elements");
    }

    KobicypherApp.prototype.initNavitemActive = function () {
        $(".navigation-menu a").each(function () {
            if (this.href == window.location.href) {
                $(this).parent().addClass("active");
                $(this).parent().parent().parent().addClass("active");
                $(this).parent().parent().parent().parent().parent().addClass("active");
            }
        })
    }

    KobicypherApp.prototype.initProductCardsFilter = function () {
        $(window).on('load', function () {
            let $container = $(".portfolioContainer");
            $container.isotope({
                filter: "*",
                animationOptions: {
                    duration: 700,
                    easing: 'linear',
                    queue: false,
                }
            })

            $('.productCardsFilter a').click(function () {
                $(".productCardsFilter .current").removeClass("current");
                $(this).addClass("current");

                let selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 700,
                        easing: 'linear',
                        queue: false,
                    }
                });

                return false;
            })
        })
    }

    KobicypherApp.prototype.init = function() {
        this.initNavbar();
        this.initNavitemActive();
        this.initProductCardsFilter();
    }

    $.KobicypherApp = new KobicypherApp();
    $.KobicypherApp.Constructor = KobicypherApp;

}(window.jQuery);

(function ($) {
    "use strict";

    $.KobicypherApp.init();
})(window.jQuery);
