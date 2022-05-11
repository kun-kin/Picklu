$(window).scroll(function() {
    // var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > 400) {
        $('.header-main').addClass('fixed');
    } else {
        $('.header-main').removeClass('fixed');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    $(function() {
        $("#date").datepicker();
        $("#date1").datepicker();
    });

    /* menu mobile */
    new Mmenu(document.querySelector("#menu"));

    document.addEventListener("click", function(evnt) {
        var anchor = evnt.target.closest('a[href="#/"]');
        if (anchor) {
            alert("Thank you for clicking, but that's a demo link.");
            evnt.preventDefault();
        }
    });
    /* end menu mobile */

    // $(".list-benefit .list-benefit-item .tab-title").click(function() {
    //     $(this).parent(".list-benefit-item").toggleClass("show");
    //     $(".list-benefit-item").not($(this).parent(".list-benefit-item")).removeClass("show");

    // });

    // $(function() {
    //     $("#date").datepicker();
    //     $("#date1").datepicker();
    // });



    $('.banner1').owlCarousel({
        loop: true,
        // margin: 30,
        center: true,
        items: 1,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        statePadding: 30,
        addClassActive: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     540: {
        //         items: 1.5
        //     }



        // }

    })

    $('.favorite-slide').owlCarousel({
        loop: true,
        // center: true,
        items: 3,
        nav: false,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        // statePadding: 30,
        addClassActive: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: {
            0: {
                items: 1
            },
            540: {
                items: 2
            },
            991: {
                items: 3
            }



        }

    })

    $('.brand-slide').owlCarousel({
        loop: true,
        // margin: 30,
        // center: true,
        items: 5,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        statePadding: 30,
        addClassActive: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: {
            0: {
                items: 2
            },
            540: {
                items: 3
            },
            768: {
                items: 4
            },
            991: {
                items: 5
            }



        }

    })


});