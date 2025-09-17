(function ($) {
    // Mobile Menu
    $(document).ready(function () {
        $("#burger-toggle").click(function () {
            $("#mobileMenu").toggleClass('show');
        });


    });

    document.querySelector("#burger-toggle")
        .addEventListener("click", function () {
            this.classList.toggle("active");
        });


    /*! Change Header & logo as you scroll down */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').addClass("smaller");
        }
        else {
            $('header').removeClass("smaller");
        }
    });


    /* Modal Popup - http://www.jqueryscript.net/lightbox/Basic-Responsive-Modal-Popup-Plugin-with-jQuery-simplePopup.html */
    /*
    !function(o){o.fn.simplePopup=function(p){var n=o.extend({centerPopup:!0,open:function(){},closed:function(){}},p),e=o(this),i=o.extend(n,p),t={init:function(){return this.each(function(){t.appendHTML(),t.setEventHandlers(),t.showPopup()})},appendHTML:function(){if(0===o(".simplePopupBackground").length){var p='<div class="simplePopupBackground"></div>';o("body").prepend(p)}if(0===e.find(".simplePopupClose").length){var n='<div class="simplePopupClose">&#10005;</div>';e.prepend(n)}},setEventHandlers:function(){o(".simplePopupClose, .simplePopupBackground").on("click",function(){t.hidePopup()}),o(window).on("resize",function(){i.centerPopup&&t.positionPopup()})},removeEventListners:function(){o(".simplePopupClose, .simplePopupBackground").off("click")},showPopup:function(){o(".simplePopupBackground").css({opacity:"0.8"}),o(".simplePopupBackground").fadeIn("fast"),e.fadeIn("slow",function(){i.open()}),i.centerPopup&&t.positionPopup()},hidePopup:function(){o(".simplePopupBackground").fadeOut("fast"),e.fadeOut("fast",function(){t.removeEventListners(),i.closed()})},positionPopup:function(){var p=o(window).width(),n=o(window).height(),i=e.width(),t=e.height(),s=n/2-t/2,u=p/2-i/2;30>s&&(s=30),e.css({position:"absolute",top:s,left:u})}};return t[p]?t[p].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof p&&p?void o.error('Method "'+method+'" does not exist in simple popup plugin!'):t.init.apply(this)}}(jQuery);

    $(document).ready(function(){
        $('.orderForm').click(function(){
            $('#orderForm').simplePopup();
        });
    });
    */
})(jQuery);