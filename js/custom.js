(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // CUSTOM LINK
  $(".custom-link").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });
  // Dropdown menu
  $(function () { // Dropdown toggle
    $('.lang__toggle').click(function () {
      $(this).next('.menu__lang').slideToggle();
    });

    $(document).click(function (e) {
      var target = e.target;
      if (!$(target).is('.lang__toggle') && !$(target).parents().is('.lang__toggle'))
      //{ $('.dropdown').hide(); }
      { $('.menu__lang').slideUp(); }
    });
  });


  $(".news__list-box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: '.arrow__prev',
    nextArrow: '.arrow__next',
  });


})(window.jQuery);

// $(function () {});
