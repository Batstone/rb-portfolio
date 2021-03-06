$(function () {

    AOS.init();

    $('.header__mobile-icon-container').on('click', () => {
        $('.js-menu')
            .toggleClass('header__mobile-icon')
            .toggleClass('header__mobile-icon--active')

        if ($('.header__list').css('display') === 'none') {
            $('.header__list').css('display', 'flex')
        } else {
            $('.header__list').css('display', 'none')
            // $('.header').css('padding-bottom', '10px')
        };
    })

    $('.js--main-nav').waypoint(function (direction) {
        if (direction === "down") {
            $('.header')
                .addClass('sticky')
            $('.header__img').css('display', 'none')
            $('.header__list').css({ 'justify-content': 'center', 'padding': '5px 10px' })
            $('.header__list-item').css('background-color', 'rgba(255, 255, 255, 0.0)')
            $('.js-link').removeClass('nav__item--active')
        } else {
            $('.header')
                .removeClass('sticky')
            $('.header__img').css('display', 'block')
            $('.header__list').css({ 'justify-content': 'flex-end', 'padding': '30px 10px' })
            $('.header__list-item').css('background-color', 'black')
            $('.js-link').addClass('nav__item--active')
        }
    }, {
        offset: '40px;'
    });

    function placeOnRightHandEdgeOfElement(toolbar, pageElement) {
        $(toolbar).css("right", $(window).scrollLeft() + ($(window).width() + -27)
            - $(pageElement).offset().left
            - parseInt($(pageElement).css("borderLeftWidth"), 10)
            - $(pageElement).width() + "px");
    }
    $(window).resize(function () {
        placeOnRightHandEdgeOfElement(".header__social-list", ".wrapper");
    });
    $(window).scroll(function () {
        placeOnRightHandEdgeOfElement(".header__social-list", ".wrapper");
    });
    $(".header__social-list").resize();
});



