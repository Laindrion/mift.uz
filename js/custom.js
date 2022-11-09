(function ($) {
  "use strict";
  // The function of menu
  $('.sub-menu__link').hover(
    function () {
      $('.menu__list-link--hover').last().toggleClass('menu__list-link--active');
    }
  );
  $('.dropdown').hover(
    function () {
      $('.header__banner').last().toggleClass('header__banner-disabled');
    }
  );

  // LANG DROPDOWN TOGGLE BUTTON
  $('.lang__toggle').click(function () {
    $(this).next('.menu__lang').slideToggle();
  });

  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is('.lang__toggle') && !$(target).parents().is('.lang__toggle')) { $('.menu__lang').slideUp(); }
  });

  // SEARCH BUTTON
  let searchBtn = document.querySelector('.header__find');
  let closeBtn = document.querySelector('.header__close');
  let searchBox = document.querySelector('.header__searchbox');

  searchBtn.onclick = function () {
    searchBox.classList.add('active')
    closeBtn.classList.add('active')
  }
  closeBtn.onclick = function () {
    searchBox.classList.remove('active')
    closeBtn.classList.remove('active')
  }

  // HEADER SLIDER
  $('.news__box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.arrow__prev-cover'),
    nextArrow: $('.arrow__next-cover'),
    asNavFor: '.news__img-box',
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  }).slickAnimation();
  $('.news__img-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.news__box',
    fade: true,
    speed: 300
  })

  // SCROLL ANIMATION
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show')
      }
    }))
  })
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el))

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });


  // STATISTICS COUNTER
  $('.statistic__container-number').counterUp({
    delay: 10,
    time: 2000
  })

  // SLIDER OF BENEFIT LINKS
  $('.links__slider-box').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: $('.links__arrow-left'),
    nextArrow: $('.links__arrow-right'),
  })
})(window.jQuery);

// MANAGEMENT
$(function () {
  $('.management__item-1').magnificPopup({
    closeOnBgClick: true,
    fixedBgPos: false
  });
  $(document).on('click', '.modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});