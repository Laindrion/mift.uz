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

  $(".statistic__container-number").counterUp({
    delay: 10,
    time: 1000
  })

  $('.links__slider-box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: false
  })
})(window.jQuery);
