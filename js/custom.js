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

  // Menu accordeon
  const accordion = document.getElementsByClassName('nav-item');
  let o;

  for (o = 0; o < accordion.length; o++) {
    accordion[o].addEventListener('click', function () {
      this.classList.toggle('active')
    })
  }

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


  // MAP SLIDER
  $('.region__slider-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: $('.arrow__left'),
    nextArrow: $('.arrow__right')
  });

  $('.region__slider-box-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: $('.arrow__left-2'),
    nextArrow: $('.arrow__right-2')
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
    autoplay: true,
    prevArrow: $('.links__arrow-left'),
    nextArrow: $('.links__arrow-right'),
  })

  // Accardeon
  let acc = document.getElementsByClassName("accardeon__btn");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("accardeon__btn-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // EVENTS
  $('.events__date-slider-box').slick({
    slidesToShow: 7,
    slidesToScroll: 6,
    infinite: false,
    prevArrow: $('.events__arrow-left'),
    nextArrow: $('.events__arrow-right'),
    speed: 800
  })

  // ABOUT UZBEKISTAN
  $('.uzbekistan__slider').slick({
    prevArrow: $('.arrow__left'),
    nextArrow: $('.arrow__right')
  });

  // investment statistics
  $('.investments-statistics__slider').slick({
    prevArrow: $('.arrow__left'),
    nextArrow: $('.arrow__right')
  });

  // Responsive section

  let navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }

})(window.jQuery);