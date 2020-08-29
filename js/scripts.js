var stickyOffset = $(".vertical-dot-nav, .toggle-button").offset();
var $contentDivs = $(".section-li");
$(document).scroll(function () {
    $contentDivs.each(function (k) {
        var _thisOffset = $(this).offset();
        var _actPosition = _thisOffset.top - $(window).scrollTop();
        if (_actPosition < (stickyOffset.top + $('.vertical-dot-nav, .toggle-button').height() / 2) && _actPosition + $(this).height() - $('.vertical-dot-nav, .toggle-button').height() / 2 > 0) {
            $(".vertical-dot-nav, .toggle-button").removeClass("light dark grey").addClass($(this).hasClass("light") ? "light" : $(this).hasClass("dark") ? "dark" : "grey");
            return false;
        }
    });
});
$(document).ready(function () {
    var $toggleButton = $('.toggle-button, .toggle-button-in_menu, .toggle-close-in_menu'),
        $menuWrap = $('.main-menu');
    $pop = $('.popup');
    $overlay = $('.overlay_popup');

    $toggleButton.on('click', function () {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });

    $(document).mouseup(function (e) {
        var div = $(".main-menu, #check-data");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $menuWrap.removeClass('menu-show');
            $overlay.removeClass('show');
            $pop.removeClass('show');
        }
    });
    $(".slidedwn").on('click', function () {
        $(".block5_video-wrap").toggleClass('block-show');
        $(this).toggleClass('active-btn')
    });
    $(".slidedwn-faq").on('click', function () {
        $(".block-faq").toggleClass('block-show');
        $(this).toggleClass('active-btn')
    });

    $(".send-btn").on('click', function () {
        $('#check-data').toggleClass('show');
        $('.overlay_popup').toggleClass('show');
    });
    $(".send-btn-thx").on('click', function () {
        $('#successfully').toggleClass('show');
        $('.overlay_popup').toggleClass('show');
    });
    $("#send-btn-back").on('click', function () {
        $(".overlay_popup").toggleClass('show');
        $("#check-data").toggleClass('show');
    });
    $("#send-btn-thx").on('click', function () {
        $("#check-data").toggleClass('show');
        $("#successfully").toggleClass('show');
    });
});
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
$(".main-menu nav a").on('click', function () {
    $(".main-menu").removeClass('menu-show');
    $(".overlay_popup").removeClass('show');
});
$(document).ready(function () {
    $("form.form-question").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: th.serialize()
        }).done(function () {
            $('#successfully').toggleClass('show');
            $('.overlay_popup').toggleClass('show');
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

$('section').verticalDotNav({
    align: "left",
    scroll_speed: 1000,
    dot_size: 15,
    dot_style: "circle"
});
