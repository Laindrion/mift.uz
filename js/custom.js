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

    // Menu responsive
    const accordion = document.getElementsByClassName('nav-item');
    let o;
    function myFunction(x) {
        if (x.matches) {
            for (o = 0; o < accordion.length; o++) {
                accordion[o].addEventListener('click', function () {
                    this.classList.toggle('active')
                })
            }
        }
        else {

        }
    }
    var x = window.matchMedia("(max-width: 1660px)")
    myFunction(x)
    x.addListener(myFunction)
    console.log(x)

    // burger
    let burgerBtn = document.querySelector('.menu__btn-link');
    let burgerCloseBtn = document.querySelector('.close-link-cover');
    let navbar = document.querySelector('.navbar-nav');

    burgerBtn.onclick = function () {
        navbar.classList.add('active')
        burgerCloseBtn.classList.add('active')
    }
    burgerCloseBtn.onclick = function () {
        navbar.classList.remove('active')
        burgerCloseBtn.classList.remove('active')
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

    // MAP SLIDER
    let marker = document.getElementsByClassName("uzb__map-marker-cover");
    let qr = document.getElementById("UZB356");
    if (qr) {
        qr.onclick = function () {
            marker.style.top = '24rem'
            marker.style.left = '23rem'
        }
    }
    
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

        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
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

})(window.jQuery);