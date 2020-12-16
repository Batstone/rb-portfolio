$(function () {

    AOS.init();

    $('.header__mobile-icon-container').on('click', () => {
        $('.js-menu')
            .toggleClass('header__mobile-icon')
            .toggleClass('header__mobile-icon--active')

        if ($('.header__nav__list').css('display') === 'none') {
            $('.header__nav__list').css('display', 'flex')
        } else {
            $('.header__nav__list').css('display', 'none')
            // $('.header').css('padding-bottom', '10px')
        };

        // if ($('.js-menu').hasClass('header__mobile-icon--active') && $('.header').hasClass('sticky')) {
        //     $('.header').css('padding-bottom', '150px')
        // }
    })

    $('.js--main-nav').waypoint(function (direction) {
        if (direction === "down") {
            $('.header')
                .addClass('sticky')
            $('.header__img').css('display', 'none')
            $('.header__nav__list').css('justify-content', 'center')
            $('.header__nav__list__item').css('background-color', 'rgba(255, 255, 255, 0.0)')
        } else {
            $('.header')
                .removeClass('sticky')
            $('.header__img').css('display', 'block')
            $('.header__nav__list').css('justify-content', 'flex-end')
            $('.header__nav__list__item').css('background-color', 'black')

        }
    }, {
        offset: '40px;'
    });

});


