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
    autoplay: true,
    prevArrow: $('.links__arrow-left'),
    nextArrow: $('.links__arrow-right'),
  })

  // MANAGEMENT
  $(function () {
    $('.management__item-1').magnificPopup({
      type: 'inline',
      preloader: 'false',
      midClcik: true,
      mainClass: 'mfp-fade',
    });
  });

  // Vacacny accordeon
  let acc = document.getElementsByClassName("vacancy__btn");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("vacancy__btn-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // Territories accordeon
  let acc1 = document.getElementsByClassName("territories__btn");
  let o;
  for (i = 0; i < acc1.length; i++) {
    acc1[i].addEventListener("click", function () {
      this.classList.toggle("territories__btn-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


  // COSTS

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Конкурс: 19.1%', 'Каталог: 18.1%', 'Аукцион: 62.8%'],
      datasets: [{
        data: [19.1, 18.1, 62.8],
        borderWidth: 1
      }]
    },
    plugins: {
      legend: {
        display: false
      }
    }
  });

})(window.jQuery);