! function ($) {
    "use strict";

    let KobicypherApp = function () {};

    KobicypherApp.prototype.initNavbar = function () {

        $(".navbar-toggle").on('click', function () {
            $(this).toggleClass("open");

        })
    }
}
