$(function () {

    $('.header__mobile-icon-container').on('click', () => {
        $('.js-menu')
            .toggleClass('header__mobile-icon')
            .toggleClass('header__mobile-icon--active')

        if ($('.header__nav__list').css('display') === 'none') {
            $('.header__nav__list').css('display', 'flex')
        } else {
            $('.header__nav__list').css('display', 'none')
        };
    })

    $('.js--main-intro').waypoint(function (direction) {
        if (direction === "down") {
            $('.header')
                .addClass('sticky')
        } else {
            $('.header')
                .removeClass('sticky')
        }
    }, {
        offset: '40px;'
    });




});


