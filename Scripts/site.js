$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.gallery .button-container .btn').click(function () {

        let filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.gallery .image-container .box').show('400')
        } else {
            $('.gallery .image-container .box').not('.' + filter).hide('200');
            $('.gallery .image-container .box').filter('.' + filter).show('400');
        }

    });

    $('#theme-toggler').click(function () {
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    });


    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });

    $('button').click(function () {
        var comment = $('.commentBox').val();
        $('<li>').text(comment).prependTo('.comments');
        $('button').attr('disabled', 'true');
        $('.commentBox').val('');
    });

    $('.commentBox').keyup(function () {
        {
            $('button').removeAttr('disabled', 'true');
        }
    });

    $('button').attr('disabled', 'true');

});
