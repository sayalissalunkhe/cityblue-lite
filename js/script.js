window.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary div element
            const tempDiv = document.createElement('div');
            // Set the HTML content of the temporary div with fetched HTML
            tempDiv.innerHTML = html;
            // Get the header content from the temporary div
            const headerContent = tempDiv.querySelector('header').innerHTML;
            // Insert the header content into the #header element
            document.getElementById('header').innerHTML = headerContent;
        });
});

window.addEventListener('DOMContentLoaded', () => {
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary div element
            const tempDiv = document.createElement('div');
            // Set the HTML content of the temporary div with fetched HTML
            tempDiv.innerHTML = html;
            // Get the header content from the temporary div
            const footerContent = tempDiv.querySelector('footer').innerHTML;
            // Insert the header content into the #header element
            document.getElementById('footer').innerHTML = footerContent;
        });
});



$(document).ready(function () {
    $('.tab-header-item').click(function () {
        var index = $(this).index();

        $('.tab-header-item').removeClass('active');
        $('.tab-pane').removeClass('active');

        $(this).addClass('active');
        $('.tab-pane').eq(index).addClass('active');
    });

    $('.banner-slider-image').slick({
        draggable: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.banner-slider-text',
    });

    $('.banner-slider-text').slick({
        draggable: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        asNavFor: '.banner-slider-image',
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