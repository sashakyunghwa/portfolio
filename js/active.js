(function ($) {
    'use strict';

    // Related Projects Slider Active Code
    if ($.fn.owlCarousel) {
        $(".blogs_area, .related_projects_area").owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            smartSpeed: 800,
            center: true,
            autoplayTimeout: 5000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

    // Blog Post Slider Active Code
    if ($.fn.owlCarousel) {
        $(".single_blog_slider, .single_port_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 500,
            autoplayTimeout: 3000
        });
    }

    // Gallery Menu Style Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // Magnific-popup Image & Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 2000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="ti-angle-up"></i>'
        });
    }
    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // Barfiller Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
    }

    // Masonary Gallery Active Code
    $('.gallery_full_width_images_area').imagesLoaded(function () {
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.gallery_full_width_images_area').isotope({
            itemSelector: '.single_gallery_item',
            percentPosition: true,
            masonry: {
                gutter: 0
            }
        });
    });

    // Animsition Active Code
    if ($.fn.animsition) {
        $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1500,
            outDuration: 1000
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // Jarallax Active JS
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    var $window = $(window);

    // Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 90) {
            $('.header_area').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
        }
    });

    // Fullscreen Active Code    
    $window.on('resizeEnd', function () {
        $(".full-height").height($window.height());
    });
    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);