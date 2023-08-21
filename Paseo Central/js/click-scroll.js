var sectionArray = [1, 2, 3, 4, 5, 6];

$.each(sectionArray, function (index, value) {
    $('.click-scroll').eq(index).click(function (e) {
        e.preventDefault();
        var offsetClick = $('#' + 'section_' + value).offset().top;
        if (index === 0) {
            offsetClick -= 83; // Restaurar el padding para el primer section
        }
        $('html, body').animate({
            'scrollTop': offsetClick
        }, 300);
    });
});

$(document).scroll(function () {
    var docScroll = $(document).scrollTop();

    $.each(sectionArray, function (index, value) {
        var sectionSelector = '#section_' + value;
        var offsetSection = $(sectionSelector).offset().top;
        var sectionHeight = $(sectionSelector).height();

        if (index > 0) {
            offsetSection -= 83; // Ignorar el padding para los siguientes sections
        }

        if (docScroll >= offsetSection && docScroll < offsetSection + sectionHeight) {
            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
            $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
            $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
        }
    });
});

$(document).ready(function () {
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});