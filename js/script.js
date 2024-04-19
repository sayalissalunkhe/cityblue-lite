$(document).ready(function () {
    // Load header
    $(function () {
        $("#header-placeholder").load("header.html");
    });

    // Load footer
    $(function () {
        $("#footer-placeholder").load("footer.html");
    });

    $('.banner-slider-image').slick({
        draggable: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.banner-slider-text').slick({
        draggable: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.client-speak-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});